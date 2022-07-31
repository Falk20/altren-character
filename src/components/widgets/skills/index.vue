<template>
  <v-container class="pa-0">
    <AltSkillsStatSection
      v-for="(stat, name) in statsWithSkills"
      :key="'stat' + name"
      :name="name"
      :title="stat.title"
      :skillsDictionary="stat.skills"
      v-model:openedForm="openedForm"
    />
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import AltSkillsStatSection from "./stat-section.vue";

import { statsWithSkills } from "@/helpers/constants";

export default defineComponent({
  name: "altSkills",

  components: {
    AltSkillsStatSection,
  },

  data() {
    return {
      statsWithSkills,
      openedForm: null,
    };
  },
});
</script>
