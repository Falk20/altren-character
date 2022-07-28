<template>
  <v-container>
    <AltWallet />
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import AltWallet from "@/components/widgets/wallet/index.vue";

export default defineComponent({
  name: "InventoryView",

  components: {
    AltWallet,
  },
});
</script>
