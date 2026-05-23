<template>
  <v-container>
    <v-container class="pa-0 mb-4 d-flex justify-space-between">
      <div>
        <p class="my-0">Осталось попыток: {{ attemptsCount }}</p>
        <p class="my-0">Результат: {{ totalScore }}</p>
      </div>
      <div>
        <v-btn
          class="mr-2"
          variant="tonal"
          color="success"
          size="small"
          rounded="lg"
          @click="startGame"
          icon="mdi-restart"
        />
        <v-btn
          variant="tonal"
          color="red"
          size="small"
          rounded="lg"
          @click="emit('exit')"
          icon="mdi-exit-to-app"
        />
      </div>
    </v-container>
    <div class="table">
      <play-card
        v-for="(card, index) in cards"
        :score="card"
        :order="index"
        :selected="selectedCardIndex.has(index)"
        @when-select="addSelectedCard"
      />
    </div>
  </v-container>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, nextTick } from "vue"
import PlayCard from "./play-card.vue"
import { levelMaxDiceNumber } from "@/helpers/viewConstants"
import { IConfig } from "./types"
import { getRndNumber } from "./lib"

const { config } = defineProps<{
  config: IConfig
}>()

const emit = defineEmits<{
  exit: []
}>()

const attemptsCount = ref(0)

const cards = ref<number[]>([0, 1, 2, 3, 4, 5, 6, 7, 0, 0, 1, 0, 0, 0])

const selectedCardIndex = ref<Set<number>>(new Set())

const totalScore = computed(() => {
  return [...selectedCardIndex.value].reduce(
    (acc, cur) => acc + cards.value[cur],
    0,
  )
})

const addSelectedCard = (index: number) => {
  if (selectedCardIndex.value.has(index) || !attemptsCount.value) {
    return
  }

  attemptsCount.value--
  selectedCardIndex.value.add(index)
}

const calcAttemptsCount = () => {
  let count = getRndNumber(levelMaxDiceNumber[config.level])

  if (config.withFriend) {
    count += getRndNumber(levelMaxDiceNumber[config.friendLevel])
  }

  attemptsCount.value = count
}

const calcCards = () => {
  const winCardsCount = getRndNumber(config.nodeSize)

  const newCards: number[] = []

  for (let i = 0; i < config.nodeSize; i++) {
    if (i < winCardsCount) {
      newCards.push(getRndNumber(levelMaxDiceNumber[config.level]))
    } else {
      newCards.push(0)
    }
  }

  cards.value = newCards.toSorted(() => Math.random() - 0.5)
}

const startGame = async () => {
  selectedCardIndex.value.clear()
  cards.value = []

  await nextTick()

  calcAttemptsCount()
  calcCards()
}

onMounted(startGame)
</script>

<style lang="css" scoped>
.table {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
  gap: 20px;
  perspective: 1000px;
  position: relative;
}
</style>
