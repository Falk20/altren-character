<template>
  <v-text-field
    v-model="valueModel"
    variant="solo"
    density="compact"
    :label="label"
    hide-details="true"
  />
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "AltTextField",

  props: {
    modelValue: {
      type: String as PropType<string>,
      required: true,
    },
    label: {
      type: String as PropType<string>,
      required: true,
    },
  },

  emits: ["update:modelValue"],

  computed: {
    valueModel: {
      get(): string {
        return this.modelValue;
      },
      set(value: string): void {
        this.$emit("update:modelValue", value);
      },
    },
  },
});
</script>
