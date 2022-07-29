<template>
  <v-text-field
    v-model.number="valueModel"
    type="number"
    variant="solo"
    density="compact"
    :label="label"
    hide-details="true"
    v-maska="'####'"
  />
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "AltNumberField",

  props: {
    value: {
      type: Number as PropType<number>,
      required: true,
    },
    label: {
      type: String as PropType<string>,
      required: true,
    },
  },

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
});
</script>
