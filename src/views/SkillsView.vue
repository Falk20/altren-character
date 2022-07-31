<template>
  <v-container>
    <altSkills />
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import altSkills from "@/components/widgets/skills/index.vue";

export default defineComponent({
  name: "SkillsView",

  components: {
    altSkills,
  },
});
</script>
