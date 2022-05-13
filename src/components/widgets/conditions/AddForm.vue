<template>
  <v-dialog v-model="dialogModel" fullscreen :retain-focus="false">
    <v-card>
      <v-toolbar color="primary">
        <v-btn icon="mdi-close" @click="dialogModel = false" />
        <v-card-title> Добавить эффект </v-card-title>
      </v-toolbar>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col>
              <v-select
                v-model="form.select"
                :items="selectList"
                label="Тип эффекта"
                required
              ></v-select>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-slider
                v-model="form.value"
                :min="1"
                :max="4"
                :step="1"
                show-ticks="always"
                thumb-label="always"
                :hide-details="true"
              >
              </v-slider>
              <pre class="text-caption text-center">Значение</pre>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-btn block color="primary" @click="addCondition">Добавить</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { ConditionFactory, conditionList } from "@/helpers/conditions";
import { ICondition } from "@/helpers/types";
import { defineComponent } from "vue";

import { createNamespacedHelpers } from "vuex";
const { mapGetters, mapMutations } =
  createNamespacedHelpers("character/status");

class FormInputs {
  select = "";
  value = 1;
}

const factory = new ConditionFactory();

export default defineComponent({
  name: "AltConditionAddForm",

  props: {
    addDialog: Boolean,
  },

  emits: ["update:addDialog"],

  data() {
    return {
      form: new FormInputs(),

      selectList: conditionList,
    };
  },

  computed: {
    ...mapGetters(["conditions"]),

    dialogModel: {
      get() {
        return this.addDialog;
      },
      set(value: boolean) {
        this.form = new FormInputs();

        this.$emit("update:addDialog", value);
      },
    },

    conditionsModel: {
      get(): ICondition[] {
        return this.conditions;
      },
      set(value: ICondition[]) {
        this.setConditions(value);
      },
    },
  },

  methods: {
    ...mapMutations(["setConditions"]),

    addCondition(): void {
      if (!this.form.select) return;

      const conditions: ICondition = factory.create(
        this.form.select,
        this.form.value
      );

      this.conditionsModel = [...this.conditionsModel, conditions];

      this.dialogModel = false;
    },
  },
});
</script>
