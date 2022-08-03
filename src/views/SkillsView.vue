<template>
  <v-container>
    <AltSkills />
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import AltSkills from "@/components/widgets/skills/index.vue";

export default defineComponent({
  name: "SkillsView",

  components: {
    AltSkills,
  },
});
</script>
