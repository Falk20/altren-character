<template>
  <v-container>
    <v-form @submit.prevent="emit('startGame', config)">
      <select-field
        label="Кол-во"
        v-model:value="config.nodeSize"
        :items="nodeSizeOptions"
      />

      <select-field
        label="Уровень навыка"
        v-model:value="config.level"
        :items="levelOptions"
        class="mt-4"
      />

      <v-checkbox label="С другом" v-model="config.withFriend" hide-details />

      <select-field
        v-if="config.withFriend"
        label="Уровень навыка друга"
        v-model:value="config.friendLevel"
        :items="levelOptions"
        class="mb-4"
      />

      <v-btn variant="tonal" type="submit" color="success" block>
        Начать
      </v-btn>
    </v-form>
  </v-container>
</template>

<script setup lang="ts">
import { useLocalStorage } from "@vueuse/core"
import SelectField from "@/components/atoms/select-field.vue"
import { IConfig } from "./types"
import { levelOptions, nodeSizeOptions } from "./lib"

const config = useLocalStorage<IConfig>("resource-game-config", {
  nodeSize: 6,
  level: 1,
  withFriend: false,
  friendLevel: 0,
})

const emit = defineEmits<{
  startGame: [config: IConfig]
}>()
</script>
