<template>
  <v-container class="pa-0">
    <AltScaleField
      v-model:value="valueModel"
      :title="title"
      :maxValue="maxValue"
    />
  </v-container>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

import AltScaleField from "@/components/atoms/scale-field.vue";

import { createNamespacedHelpers } from "vuex";
import { Stats, statsWithSkills } from "@/helpers/constants";
import { ISkill } from "@/helpers/types";
const { mapGetters, mapMutations } =
  createNamespacedHelpers("character/skills");

export default defineComponent({
  name: "altSkillField",

  components: {
    AltScaleField,
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
    statName: {
      type: String as PropType<Stats>,
      requred: true,
      default: "",
    },
  },

  data() {
    return {};
  },

  computed: {
    ...mapGetters(["getSkill"]),

    valueModel: {
      get(): number {
        return this.getSkill(this.name, this.statName);
      },
      set(value: number): void {
        this.setSkill({
          name: this.name,
          level: value,
          statName: this.statName,
        });
      },
    },

    title(): string {
      return (
        statsWithSkills[this.statName].skills.find(
          (skill: ISkill) => skill.value === this.name
        )?.title ?? ""
      );
    },
  },

  methods: {
    ...mapMutations(["setSkill"]),
  },
});
</script>
