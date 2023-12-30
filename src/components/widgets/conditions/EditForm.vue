<template>
  <v-dialog
    fullscreen
    scrollable
    transition="dialog-top-transition"
    v-model="dialogModel"
  >
    <v-card>
      <v-toolbar
        height="48"
        color="primary"
      >
        <v-btn
          icon="mdi-close"
          @click="dialogModel = false"
        />
        <v-toolbar-title>Эффекты</v-toolbar-title>
      </v-toolbar>
      <v-card-text>
        <v-container class="pa-0">
          <v-row>
            <v-col class="mt-5">
              <v-slider
                v-model="HP"
                :min="-5"
                :max="5"
                :step="1"
                show-ticks="always"
                thumb-label="always"
                :hide-details="true"
              />
              <pre class="text-caption text-center">HP</pre>
            </v-col>
          </v-row>
          <v-row>
            <v-col class="mt-5">
              <v-slider
                v-model="MP"
                :min="-10"
                :max="10"
                :step="1"
                show-ticks="always"
                thumb-label="always"
                :hide-details="true"
              />
              <pre class="text-caption text-center">{{ mpTitle }}</pre>
            </v-col>
          </v-row>
          <v-row>
            <v-col class="mt-5">
              <v-slider
                v-model="threshold"
                :min="-10"
                :max="30"
                :step="1"
                show-ticks="always"
                thumb-label="always"
                :hide-details="true"
              />
              <pre class="text-caption text-center">Порог</pre>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import { usePersonalInfoStore } from '@/store/stores/personal-info';
import { useStatusStore } from '@/store/stores/status';
import { computed } from 'vue';

export interface Props {
  editDialog: boolean
}

const props = defineProps<Props>()
const emit = defineEmits<{
  'update:editDialog': [value: boolean]
}>()

const personalInfoStore = usePersonalInfoStore()
const statusStore = useStatusStore()

const dialogModel = computed({
  get: () => props.editDialog,
  set: (value: boolean) => emit('update:editDialog', value)
})

const HP = computed({
  get: () => statusStore.conditions.HP,
  set: (value: number) => statusStore.setCondiField('HP', value)
})

const MP = computed({
  get: () => statusStore.conditions.MP,
  set: (value: number) => statusStore.setCondiField('MP', value)
})

const threshold = computed({
  get: () => statusStore.conditions.threshold,
  set: (value: number) => statusStore.setCondiField('threshold', value)
})

const mpTitle = computed(() => personalInfoStore.isMage ? personalInfoStore.isBasij ? "Басидж" : "MP" : "EP")
</script>
