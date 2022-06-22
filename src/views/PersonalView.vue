<template>
  <v-container>
    <AtlIsMageToggler />
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import AtlIsMageToggler from "@/components/widgets/is-mage-toggler/index.vue";

export default defineComponent({
  name: "PersonalView",

  components: {
    AtlIsMageToggler,
  },
});
</script>
