<template>
  <v-container class="pa-0">
    <h2 class="text-center">{{ name }}</h2>

    <!-- <AltScaleField
      v-for="skill in skills"
      :key="'skill' + skill.value"
      v-model:value="agilityModel"
      :title="skill.title"
    /> -->
  </v-container>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

// import AltScaleField from "@/components/atoms/scale-field.vue";

import { createNamespacedHelpers } from "vuex";
const { mapMutations } = createNamespacedHelpers("character/skills");

export default defineComponent({
  name: "altSkillField",

  components: {
    // AltScaleField,
  },

  props: {
    name: {
      type: String as PropType<string>,
      requred: true,
    },
    maxValue: {
      type: Number as PropType<number>,
      default: 6,
    },
  },

  data() {
    return {};
  },

  computed: {
    valueModel: {
      get(): number {
        return 0;
      },
      set(value: number): void {
        this.setSkill({
          statName: "endurance",
          value,
        });
      },
    },
  },

  methods: {
    ...mapMutations(["setSkill"]),
  },
});
</script>
