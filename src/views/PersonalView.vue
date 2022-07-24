<template>
  <v-container>
    <AtlPersonalTogglers />
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import AtlPersonalTogglers from "@/components/widgets/personal-togglers/index.vue";

export default defineComponent({
  name: "PersonalView",

  components: {
    AtlPersonalTogglers,
  },
});
</script>
