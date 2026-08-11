<template>
  <div>
    <v-navigation-drawer permanent width="300">
      <v-list
        v-model:selected="selectedChars"
        lines="two"
        select-strategy="leaf"
      >
        <v-list-subheader>Выберите персонажа для отслеживания</v-list-subheader>
        <v-list-item
          v-for="char in chars"
          :key="char.id"
          :title="char.personalInfo.name || '—'"
          :subtitle="char.id"
          :value="char.id"
        >
          <template v-slot:prepend="{ isSelected, select }">
            <v-list-item-action start>
              <v-checkbox-btn
                :model-value="isSelected"
                @update:model-value="select"
              ></v-checkbox-btn>
            </v-list-item-action>
          </template>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <div class="ma-2 charsGrid">
      <GmCharCard v-for="char in watchedChars" :key="char.id" :char="char" />
    </div>
  </div>
</template>

<script setup lang="ts">
import GmCharCard from "@/components/widgets/gm-char-card/gm-char-card.vue"
import { getAllCharsAsGM } from "@/firebase/db"
import { ICharacter } from "@/helpers/types"
import { useGMChars } from "@/shared/useGMChars"
import { useLocalStorage } from "@vueuse/core"
import { onBeforeMount, onUpdated, ref } from "vue"

const selectedChars = useLocalStorage<string[]>("gm-selected-chars", [])
const chars = ref<ICharacter[]>([])

const loadChars = async () => {
  const list = await getAllCharsAsGM()

  chars.value = list.sort((a, b) =>
    a.personalInfo.name.localeCompare(b.personalInfo.name),
  )
}

onBeforeMount(loadChars)
onUpdated(loadChars)

const { chars: watchedChars } = useGMChars(selectedChars)
</script>

<style scoped>
.charsGrid {
  display: grid;
  gap: 12px;
  grid-template-columns: repeat(3, 1fr);
}
</style>
