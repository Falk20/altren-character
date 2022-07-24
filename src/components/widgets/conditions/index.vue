<template>
  <v-row class="pa-0 ma-0 mb-3">
    <v-col class="pa-0">
      <h3 class="ml-3">
        <span>Эффекты</span>
        <v-btn
          class="d-inline"
          variant="text"
          icon="mdi-pencil"
          @click="editDialog = true"
        />
      </h3>
      <div class="mx-3 d-flex flex-wrap">
        <template v-if="haveAnyCondition">
          <v-icon v-if="haveHPCondition" class="mr-2" :color="HPIcon.color">
            {{ HPIcon.icon }}
          </v-icon>
          <v-icon v-if="haveMPCondition" class="mr-2" :color="MPIcon.color">
            {{ MPIcon.icon }}
          </v-icon>
          <v-icon
            v-if="haveThresholdCondition"
            class="mr-2"
            :color="thresholdIcon.color"
          >
            {{ thresholdIcon.icon }}
          </v-icon>
        </template>
        <p class="text-caption" v-else>Нет активных эффектов</p>
      </div>
      <EditForm v-model:editDialog="editDialog" />
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import EditForm from "./EditForm.vue";

import { createNamespacedHelpers } from "vuex";
const { mapGetters } = createNamespacedHelpers("character/status");

export default defineComponent({
  name: "AltFatigue",

  components: {
    EditForm,
  },

  data() {
    return {
      editDialog: false,
    };
  },

  computed: {
    ...mapGetters([
      "conditionHP",
      "conditionMP",
      "conditionThreshold",
      "isMage",
    ]),

    haveHPCondition(): boolean {
      return this.conditionHP !== 0;
    },
    haveMPCondition(): boolean {
      return this.conditionMP !== 0;
    },
    haveThresholdCondition(): boolean {
      return this.conditionThreshold !== 0;
    },

    HPIcon() {
      if (!this.haveHPCondition) return null;

      if (this.conditionHP > 0) {
        return {
          icon: "mdi-heart",
          color: "red",
        };
      }

      return {
        icon: "mdi-heart-broken",
        color: "black",
      };
    },

    MPIcon() {
      if (!this.haveMPCondition) return null;

      if (this.isMage) {
        if (this.conditionMP > 0) {
          return {
            icon: "mdi-star-plus",
            color: "primary",
          };
        }

        return {
          icon: "mdi-star-minus",
          color: "brown",
        };
      }

      if (this.conditionMP > 0) {
        return {
          icon: "mdi-flash-alert",
          color: "yellow-darken-1",
        };
      }

      return {
        icon: "mdi-flash-off",
        color: "purple",
      };
    },

    thresholdIcon() {
      if (!this.haveThresholdCondition) return null;

      if (this.conditionThreshold > 0) {
        return {
          icon: "mdi-shield-plus",
          color: "green",
        };
      }

      return {
        icon: "mdi-shield-off",
        color: "orange",
      };
    },

    haveAnyCondition(): boolean {
      return (
        this.haveHPCondition ||
        this.haveMPCondition ||
        this.haveThresholdCondition
      );
    },
  },

  methods: {},
});
</script>
