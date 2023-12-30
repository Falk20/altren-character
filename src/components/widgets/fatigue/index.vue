<template>
  <v-row class="pa-0 ma-0 mb-3 mt-7">
    <v-col class="pa-0">
      <v-slider
        v-model="value"
        :min="0"
        :max="threshold"
        :step="1"
        show-ticks="always"
        thumb-label="always"
        :hide-details="true"
      >
        <template v-slot:prepend>
          <v-btn
            size="small"
            variant="text"
            icon="mdi-minus"
            @click="decrement"
          />
        </template>

        <template v-slot:append>
          <v-btn
            size="small"
            variant="text"
            icon="mdi-plus"
            @click="increment"
          />
        </template>
      </v-slider>
      <pre class="text-caption text-center">
        Усталость
      </pre>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import { useStatusStore } from '@/store/stores/status';
import { computed } from 'vue';

const statusStore = useStatusStore()

const value = computed({
  get: () => statusStore.fatigue,
  set: (value: number) => statusStore.setStatusField('fatigue', value)
})

const threshold = computed(() => statusStore.threshold)

const decrement = () => {
  if (statusStore.fatigue > 0) {
    statusStore.setStatusField('fatigue', statusStore.fatigue - 1);
  }
}

const increment = () => {
  if (statusStore.fatigue < statusStore.threshold) {
    statusStore.setStatusField('fatigue', statusStore.fatigue + 1)
  }
}
</script>
