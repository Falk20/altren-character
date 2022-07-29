<template>
  <v-checkbox
    v-model="valueModel"
    :label="title"
    color="primary"
    hide-details
  />
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "AltCheckboxField",

  props: {
    value: { type: Boolean as PropType<boolean>, required: true },
    title: String,
  },

  emits: ["update:value"],

  computed: {
    valueModel: {
      get(): boolean {
        return this.value;
      },
      set(value: boolean): void {
        this.$emit("update:value", value);
      },
    },
  },
});
</script>

<style>
.v-label {
  opacity: 1;
}
</style>
