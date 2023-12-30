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
        <AltNumberField
          v-model.number="wallet"
          label="Кошель"
          mask="######"
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
          >-100</v-btn>
          <v-btn
            size="small"
            variant="tonal"
            rounded="pill"
            @click="decrement(10)"
          >-10</v-btn>
        </div>
        <div class="d-flex">
          <v-btn
            size="small"
            class="mr-2"
            variant="tonal"
            rounded="pill"
            @click="increment(10)"
          >+10</v-btn>

          <v-btn
            size="small"
            variant="tonal"
            rounded="pill"
            @click="increment(100)"
          >+100</v-btn>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import AltNumberField from "@/components/atoms/number-field.vue";
import { useInventoryStore } from "@/store/stores/inventory";
import { computed } from "vue";

const inventoryStore = useInventoryStore()

const wallet = computed({
  get: () => inventoryStore.wallet,
  set: (value: number) => inventoryStore.setWallet(value),
})

const decrement = (value = 1) => {
  const difference = wallet.value - value

  if (difference >= 0) {
    wallet.value = difference;
  }
}

const increment = (value = 1) => {
  wallet.value += value
}
</script>
