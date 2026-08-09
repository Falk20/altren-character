<template>
  <v-container class="pa-0">
    <v-row class="pa-0 ma-0">
      <v-col class="pa-0">
        <AltPointBar v-model:value="hits" v-bind="HPBar" :maxValue="maxHits" />
      </v-col>
    </v-row>
    <v-row v-if="!isFameLvl3" class="pa-0 ma-0">
      <v-col class="pa-0">
        <AltPointBar
          v-model:value="mana"
          v-bind="manaBar"
          :maxValue="maxMana"
        />
      </v-col>
    </v-row>
    <v-row v-if="isBard" class="pa-0 ma-0">
      <v-col class="pa-0">
        <AltPointBar
          v-model:value="inspiration"
          v-bind="InspirationBar"
          :maxValue="maxInspiration"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { computed } from "vue"

import { getCurrentPointBar } from "@/helpers/utils"
import { HPBar, InspirationBar } from "@/helpers/viewConstants"
import { fameLvl3 } from "@/helpers/constants"

import { useStatusStore } from "@/store/stores/status"
import { usePersonalInfoStore } from "@/store/stores/personal-info"

import AltPointBar from "./point-bar.vue"

const personalInfoStore = usePersonalInfoStore()
const statusStore = useStatusStore()

const hits = computed({
  get: () => statusStore.status.hits,
  set: (value: number) => statusStore.setStatusField("hits", value),
})

const maxHits = computed(() => statusStore.maxHits)

const mana = computed({
  get: () => statusStore.status.mana,
  set: (value: number) => statusStore.setStatusField("mana", value),
})

const maxMana = computed(() => statusStore.maxMana)

const inspiration = computed({
  get: () => statusStore.status.inspiration,
  set: (value: number) => statusStore.setStatusField("inspiration", value),
})

const maxInspiration = computed(() => statusStore.maxInspiration)

const manaBar = computed(() =>
  getCurrentPointBar(
    personalInfoStore.personalInfo.isMage,
    personalInfoStore.personalInfo.isBasij,
  ),
)

const isBard = computed(() => personalInfoStore.personalInfo.isBard)

const isFameLvl3 = computed(
  () => personalInfoStore.personalInfo.fame >= fameLvl3,
)
</script>
