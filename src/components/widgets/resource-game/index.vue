<template>
  <play-table
    v-if="currentConfig"
    :config="currentConfig"
    @exit="whenGameEnded"
  />
  <config-form v-else @startGame="whenGameStarted" />
</template>

<script setup lang="ts">
import { ref } from "vue"
import ConfigForm from "./config-form.vue"
import PlayTable from "./play-table.vue"
import { IConfig } from "./types"

const currentConfig = ref<IConfig | null>(null)

const whenGameStarted = (config: IConfig) => {
  currentConfig.value = config
}

const whenGameEnded = () => {
  currentConfig.value = null
}
</script>
