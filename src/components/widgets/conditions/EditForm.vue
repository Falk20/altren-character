<template>
  <v-dialog v-model="dialogModel" fullscreen>
    <v-card>
      <v-toolbar color="primary">
        <v-btn icon="mdi-close" @click="dialogModel = false" />
        <v-card-title> Эффекты </v-card-title>
        <v-spacer></v-spacer>
        <v-btn icon="mdi-plus" @click="$emit('open-add-dialog')" />
      </v-toolbar>
      <v-card-text>
        <v-container fluid>
          <v-row dense>
            <v-col
              v-for="(condition, index) in conditions"
              :key="`condition-${index}`"
            >
              {{ condition.title }}
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { ICondition } from "@/helpers/types";
import { defineComponent } from "vue";

import { createNamespacedHelpers } from "vuex";
const { mapGetters, mapMutations } =
  createNamespacedHelpers("character/status");

export default defineComponent({
  name: "AltConditionEditForm",

  props: {
    editDialog: Boolean,
    closeEditDialog: Function,
    closeAddDialog: Function,
  },

  emits: ["update:editDialog"],

  computed: {
    dialogModel: {
      get() {
        return this.editDialog;
      },
      set(value: boolean) {
        this.$emit("update:editDialog", value);
      },
    },

    ...mapGetters(["conditions"]),

    modelConditions: {
      get(): ICondition[] {
        return this.conditions;
      },
      set(value: ICondition[]): void {
        this.setConditions(value);
      },
    },
  },

  methods: {
    ...mapMutations(["setConditions"]),
  },
});
</script>
