<template>
  <v-container class="px-0 py-2">
    <h2 class="d-flex justify-center">
      <span>{{ title }}</span>
      <v-btn
        v-if="canAddNewSkill"
        class="ml-2"
        size="small"
        flat
        color="success"
        :icon="btnIcon"
        @click="toggleForm"
      />
    </h2>

    <AltSkillAddingForm
      v-if="isCurrentFormOpen"
      :statName="name"
      :skillsDictionary="filteredSkillsDictionary"
      @close-form="closeForm"
    />

    <template v-if="learnedSkills.length">
      <AltStateField
        v-for="skill in learnedSkills"
        :key="'skill-' + skill"
        :name="skill"
        :maxValue="statLevel"
        :statName="name"
      />
    </template>
    <p class="text-center" v-else-if="!isCurrentFormOpen">Навыки не изучены</p>
  </v-container>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { ISkill } from "@/helpers/types";

import { createNamespacedHelpers } from "vuex";
const { mapGetters: mapSkillsGetters } =
  createNamespacedHelpers("character/skills");
const { mapGetters: mapStatsGetters } =
  createNamespacedHelpers("character/stats");

import AltStateField from "./stat-field.vue";
import AltSkillAddingForm from "./adding-form.vue";
import { Stats } from "@/helpers/constants";

export default defineComponent({
  name: "altSkillsStatSection",

  components: {
    AltStateField,
    AltSkillAddingForm,
  },

  props: {
    name: {
      type: String as PropType<Stats>,
      requred: true,
    },
    title: {
      type: String as PropType<string>,
      requred: true,
    },
    skillsDictionary: {
      type: Array as PropType<ISkill[]>,
      requred: true,
      default: () => [],
    },
    openedForm: {
      type: String as PropType<string>,
      requred: true,
      default: null,
    },
  },

  data() {
    return {};
  },

  computed: {
    ...mapSkillsGetters(["statSkills", "skillCount"]),
    ...mapStatsGetters(["statByName"]),

    statLevel() {
      return this.statByName(this.name);
    },

    learnedSkills() {
      return Object.keys(this.statSkills(this.name));
    },

    isCurrentFormOpen(): boolean {
      return this.openedForm === this.name;
    },

    canAddNewSkill(): boolean {
      return !!this.filteredSkillsDictionary.length && this.skillCount < 13;
    },

    btnIcon() {
      return this.isCurrentFormOpen ? "mdi-minus" : "mdi-plus";
    },

    filteredSkillsDictionary(): ISkill[] {
      return this.skillsDictionary.filter(
        (skill) => !this.learnedSkills.includes(skill.value)
      );
    },
  },

  methods: {
    toggleForm(): void {
      let value = this.isCurrentFormOpen ? null : this.name;
      this.$emit("update:openedForm", value);
    },
    closeForm(): void {
      this.$emit("update:openedForm", null);
    },
  },
});
</script>
