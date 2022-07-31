<template>
  <v-container>
    <v-row>
      <v-col>
        <AltSelectField
          v-model:value="selectedSkill"
          :items="skillsDictionary"
          label="Новый навык"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-btn
          size="small"
          flat
          block
          color="success"
          :disabled="!selectedSkill"
          @click="addSkill"
        >
          Добавить
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { ISkill } from "@/helpers/types";

import { createNamespacedHelpers } from "vuex";
const { mapMutations } = createNamespacedHelpers("character/skills");

import AltSelectField from "@/components/atoms/select-field.vue";

export default defineComponent({
  name: "altSkillAddingForm",

  components: {
    AltSelectField,
  },

  props: {
    statName: {
      type: String as PropType<string>,
      requred: true,
    },
    skillsDictionary: {
      type: Array as PropType<ISkill[]>,
      requred: true,
      default: () => [],
    },
  },

  data() {
    return {
      selectedSkill: this.skillsDictionary[0].value,
    };
  },

  methods: {
    ...mapMutations(["setSkill"]),

    addSkill(): void {
      this.setSkill({
        name: this.selectedSkill,
        level: 1,
        statName: this.statName,
      });

      this.$emit("close-form");
    },
  },
});
</script>
