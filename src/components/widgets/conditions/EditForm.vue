<template>
  <v-dialog v-model="dialogModel" fullscreen scrollable>
    <v-card>
      <v-container class="pa-0">
        <v-toolbar height="48" color="primary">
          <v-btn icon="mdi-close" @click="dialogModel = false" />
          <v-toolbar-title>Эффекты</v-toolbar-title>
        </v-toolbar>
      </v-container>
      <v-card-text>
        <v-container class="pa-0">
          <v-row>
            <v-col class="mt-5">
              <v-slider
                v-model="modelHP"
                :min="-5"
                :max="5"
                :step="1"
                show-ticks="always"
                thumb-label="always"
                :hide-details="true"
              ></v-slider>
              <pre class="text-caption text-center">HP</pre>
            </v-col>
          </v-row>
          <v-row>
            <v-col class="mt-5">
              <v-slider
                v-model="modelMP"
                :min="-10"
                :max="10"
                :step="1"
                show-ticks="always"
                thumb-label="always"
                :hide-details="true"
              ></v-slider>
              <pre class="text-caption text-center">{{ mpTitle }}</pre>
            </v-col>
          </v-row>
          <v-row>
            <v-col class="mt-5">
              <v-slider
                v-model="modelThreshold"
                :min="-10"
                :max="30"
                :step="1"
                show-ticks="always"
                thumb-label="always"
                :hide-details="true"
              ></v-slider>
              <pre class="text-caption text-center">Порог</pre>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { createNamespacedHelpers } from "vuex";
const { mapGetters, mapMutations } =
  createNamespacedHelpers("character/status");

export default defineComponent({
  name: "AltConditionEditForm",

  props: {
    editDialog: Boolean,
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

    ...mapGetters([
      "conditionHP",
      "conditionMP",
      "conditionThreshold",
      "isMage",
      "isBasij",
    ]),

    modelHP: {
      get(): number {
        return this.conditionHP;
      },
      set(value: number): void {
        this.setConditionHP(value);
      },
    },
    modelMP: {
      get(): number {
        return this.conditionMP;
      },
      set(value: number): void {
        this.setConditionMP(value);
      },
    },
    modelThreshold: {
      get(): number {
        return this.conditionThreshold;
      },
      set(value: number): void {
        this.setConditionThreshold(value);
      },
    },

    mpTitle(): string {
      return this.isMage ? (this.isBasij ? "Басидж" : "MP") : "EP";
    },
  },

  methods: {
    ...mapMutations([
      "setConditionHP",
      "setConditionMP",
      "setConditionThreshold",
    ]),
  },
});
</script>
