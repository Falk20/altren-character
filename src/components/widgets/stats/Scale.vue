<template>
  <v-row>
    <v-col class="d-flex flex-column align-center">
      <h4 class="mb-2">
        <v-btn variant="text" icon="mdi-minus" @click="decrement" />
        <span>{{ title }}</span>
        <v-btn variant="text" icon="mdi-plus" @click="increment" />
      </h4>
      <v-rating v-model="valueModel" :length="6">
        <template v-slot:item="props">
          <v-icon
            :color="props.isFilled ? 'green' : 'grey-lighten-1'"
            @click="props.onClick"
            size="44"
          >
            {{ getIcon(props.value) }}
          </v-icon>
        </template>
      </v-rating>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "AltStatsScale",

  props: {
    value: { type: Number as PropType<number>, required: true },
    title: String,
  },

  emits: ["update:value"],

  computed: {
    valueModel: {
      get() {
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
      if (this.valueModel < 6) {
        this.valueModel++;
      }
    },

    getIcon(value: number) {
      switch (value) {
        case 1:
          return "mdi-dice-d4";
        case 2:
          return "mdi-dice-d6";
        case 3:
          return "mdi-dice-d8";
        case 4:
          return "mdi-dice-d10";
        case 5:
          return "mdi-dice-d12";
        case 6:
          return "mdi-dice-d20";
      }
      return "mdi-dice-d4";
    },
  },
});
</script>
