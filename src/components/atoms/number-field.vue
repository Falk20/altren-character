<template>
  <v-text-field
    v-model.number="valueModel"
    type="number"
    variant="solo"
    density="compact"
    :label="label"
    hide-details
    v-maska="mask"
  />
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "AltNumberField",

  props: {
    modelValue: {
      type: Number as PropType<number>,
      required: true,
    },
    label: {
      type: String as PropType<string>,
      required: true,
    },
    mask: {
      type: [String, Array],
      default: "####",
    },
  },

  emits: ["update:modelValue"],

  computed: {
    valueModel: {
      get(): number {
        return this.modelValue ?? 0;
      },
      set(value: number | string): void {
        this.$emit("update:modelValue", typeof value === 'number' ? value : 0);
      },
    },
  },
});
</script>
