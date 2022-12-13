<template>
  <v-select
    v-model="valueModel"
    :items="items"
    variant="solo"
    density="compact"
    :label="label"
    hide-details="true"
  ></v-select>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "AltSelectField",

  props: {
    modelValue: {
      type: String as PropType<string>,
      required: true,
    },
    label: {
      type: String as PropType<string>,
      required: true,
    },
    items: {
      type: Array as PropType<any[]>,
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
