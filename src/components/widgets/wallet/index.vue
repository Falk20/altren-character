<template>
  <v-container class="pa-0">
    <v-row class="pa-0 ma-0 mb-3">
      <v-col class="pa-0 d-flex">
        <v-btn
          class="d-inline"
          variant="text"
          icon="mdi-minus"
          @click="decrement()"
        />
        <v-text-field
          v-model.number="value"
          type="number"
          variant="solo"
          density="compact"
          label="Кошель"
          hide-details="true"
          v-maska="'######'"
        />
        <v-btn
          class="d-inline"
          variant="text"
          icon="mdi-plus"
          @click="increment()"
        />
      </v-col>
    </v-row>
    <v-row class="pa-0 my-0 mx-10">
      <v-col class="pa-0 d-flex justify-space-between">
        <div class="d-flex">
          <v-btn
            size="small"
            class="mr-2"
            variant="tonal"
            rounded="pill"
            @click="decrement(100)"
            >-100</v-btn
          >
          <v-btn
            size="small"
            variant="tonal"
            rounded="pill"
            @click="decrement(10)"
            >-10</v-btn
          >
        </div>
        <div class="d-flex">
          <v-btn
            size="small"
            class="mr-2"
            variant="tonal"
            rounded="pill"
            @click="increment(10)"
            >+10</v-btn
          >

          <v-btn
            size="small"
            variant="tonal"
            rounded="pill"
            @click="increment(100)"
            >+100</v-btn
          >
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { createNamespacedHelpers } from "vuex";
const { mapGetters, mapMutations } = createNamespacedHelpers(
  "character/inventory"
);

export default defineComponent({
  name: "AltWallet",

  computed: {
    ...mapGetters(["wallet"]),

    value: {
      get(): number {
        return this.wallet;
      },
      set(value: number): void {
        this.setWallet(value);
      },
    },
  },

  methods: {
    ...mapMutations(["setWallet"]),

    decrement(value = 1): void {
      if (this.value - value > 0) {
        this.value -= value;
      }
    },

    increment(value = 1): void {
      this.value += value;
    },
  },
});
</script>
