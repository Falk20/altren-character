<template>
  <v-container>
    <AltPersonalTogglers />
    <AltKarmaFame />
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import AltPersonalTogglers from "@/components/widgets/personal-togglers/index.vue";
import AltKarmaFame from "@/components/widgets/karma-fame/index.vue";

export default defineComponent({
  name: "PersonalView",

  components: {
    AltPersonalTogglers,
    AltKarmaFame,
  },
});
</script>
