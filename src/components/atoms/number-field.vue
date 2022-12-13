<template>
  <v-text-field
    v-model.number="valueModel"
    type="number"
    variant="solo"
    density="compact"
    :label="label"
    hide-details="true"
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
      set(value: number): void {
        this.$emit("update:modelValue", value);
      },
    },
  },
});
</script>
