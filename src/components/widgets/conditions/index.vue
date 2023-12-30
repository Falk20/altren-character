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
          <v-icon
            v-if="HPIcon"
            class="mr-2"
            :color="HPIcon.color"
          >
            {{ HPIcon.icon }}
          </v-icon>
          <v-icon
            v-if="MPIcon"
            class="mr-2"
            :color="MPIcon.color"
          >
            {{ MPIcon.icon }}
          </v-icon>
          <v-icon
            v-if="thresholdIcon"
            class="mr-2"
            :color="thresholdIcon.color"
          >
            {{ thresholdIcon.icon }}
          </v-icon>
        </template>
        <p
          class="text-caption"
          v-else
        >
          Нет активных эффектов
        </p>
      </div>
      <EditForm v-model:editDialog="editDialog" />
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import { ref } from "vue";
import EditForm from "./EditForm.vue";
import { useStatusStore } from "@/store/stores/status";
import { computed } from "vue";
import { usePersonalInfoStore } from "@/store/stores/personal-info";

const personalInfoStore = usePersonalInfoStore()
const statusStore = useStatusStore()

const editDialog = ref(false)

const HPIcon = computed(() => {
  if (statusStore.conditions.HP === 0) return null;

  if (statusStore.conditions.HP > 0) {
    return {
      icon: "mdi-heart",
      color: "red",
    };
  }

  return {
    icon: "mdi-heart-broken",
    color: "black",
  };
})
const MPIcon = computed(() => {
  if (statusStore.conditions.MP === 0) return null;

  if (personalInfoStore.isMage) {
    if (statusStore.conditions.MP > 0) {
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

  if (statusStore.conditions.MP > 0) {
    return {
      icon: "mdi-flash-alert",
      color: "yellow-darken-1",
    };
  }

  return {
    icon: "mdi-flash-off",
    color: "purple",
  };
})
const thresholdIcon = computed(() => {
  if (statusStore.conditions.threshold === 0) return null;

  if (statusStore.conditions.threshold > 0) {
    return {
      icon: "mdi-shield-plus",
      color: "green",
    };
  }

  return {
    icon: "mdi-shield-off",
    color: "orange",
  };
})

const haveAnyCondition = computed(() => !!HPIcon.value || !!MPIcon.value || !!thresholdIcon.value)
</script>
