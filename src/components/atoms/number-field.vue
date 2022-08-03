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
    value: {
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

  computed: {
    valueModel: {
      get(): number {
        return this.value ?? 0;
      },
      set(value: number): void {
        this.$emit("update:value", value);
      },
    },
  },
});
</script>
