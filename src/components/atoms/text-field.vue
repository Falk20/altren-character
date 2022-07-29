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
  name: "AltNumberField",

  props: {
    value: {
      type: String as PropType<string>,
      required: true,
    },
    label: {
      type: String as PropType<string>,
      required: true,
    },
  },

  computed: {
    valueModel: {
      get(): string {
        return this.value;
      },
      set(value: string): void {
        this.$emit("update:value", value);
      },
    },
  },
});
</script>
