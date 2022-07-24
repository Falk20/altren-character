<template>
  <v-row class="pa-0 ma-0 mb-3">
    <v-col class="pa-0">
      <h3 class="ml-3">{{ title }} {{ value }}/{{ maxValue }}</h3>
      <div class="d-flex justify-space-between">
        <v-btn variant="text" icon="mdi-minus" @click="decrement" />
        <v-rating
          class="flex-wrap justify-center"
          v-model="valueModel"
          :empty-icon="emptyIcon"
          :full-icon="fullIcon"
          :length="maxValue"
          :color="color"
        />
        <v-btn variant="text" icon="mdi-plus" @click="increment" />
      </div>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "AltPointBar",

  props: {
    value: { type: Number as PropType<number>, required: true },
    maxValue: { type: Number as PropType<number>, required: true },
    title: String,
    emptyIcon: String,
    fullIcon: String,
    color: String,
  },

  emits: ["update:value"],

  computed: {
    valueModel: {
      get(): number {
        return this.value;
      },
      set(value: number): void {
        this.$emit("update:value", value);
      },
    },
  },

  methods: {
    decrement(): void {
      if (this.valueModel > 0) {
        this.valueModel--;
      }
    },

    increment(): void {
      if (this.valueModel < this.maxValue) {
        this.valueModel++;
      }
    },
  },
});
</script>
