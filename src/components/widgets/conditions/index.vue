<template>
  <v-row class="pa-0 ma-0">
    <v-col class="pa-0">
      <h3 class="ml-3 my-0">
        <span>Эффекты</span>
        <v-btn
          class="d-inline"
          variant="text"
          icon="mdi-pencil"
          @click="editDialog = true"
        />
      </h3>
      <div class="mx-3 d-flex flex-wrap mb-3">
        <template v-if="haveAnyCondition">
          <v-icon v-if="HPIcon" class="mr-2" :color="HPIcon.color">
            {{ HPIcon.icon }}
          </v-icon>
          <v-icon v-if="MPIcon" class="mr-2" :color="MPIcon.color">
            {{ MPIcon.icon }}
          </v-icon>
          <v-icon
            v-if="thresholdIcon"
            class="mr-2"
            :color="thresholdIcon.color"
          >
            {{ thresholdIcon.icon }}
          </v-icon>
          <v-icon
            v-if="stepCountIcon"
            class="mr-2"
            :color="stepCountIcon.color"
          >
            {{ stepCountIcon.icon }}
          </v-icon>
        </template>
        <p class="text-label-large ma-0" v-else>Нет активных эффектов</p>
      </div>
    </v-col>
    <EditForm v-model:editDialog="editDialog" />
  </v-row>
</template>

<script setup lang="ts">
import { ref } from "vue"
import EditForm from "./EditForm.vue"
import { useStatusStore } from "@/store/stores/status"
import { computed } from "vue"
import { usePersonalInfoStore } from "@/store/stores/personal-info"

const personalInfoStore = usePersonalInfoStore()
const statusStore = useStatusStore()

const editDialog = ref(false)

const HPIcon = computed(() => {
  if (statusStore.status.conditions.HP === 0) return null

  if (statusStore.status.conditions.HP > 0) {
    return {
      icon: "mdi-heart",
      color: "red",
    }
  }

  return {
    icon: "mdi-heart-broken",
    color: "black",
  }
})
const MPIcon = computed(() => {
  if (statusStore.status.conditions.MP === 0) return null

  if (personalInfoStore.personalInfo.isMage) {
    if (statusStore.status.conditions.MP > 0) {
      return {
        icon: "mdi-star-plus",
        color: "primary",
      }
    }

    return {
      icon: "mdi-star-minus",
      color: "brown",
    }
  }

  if (statusStore.status.conditions.MP > 0) {
    return {
      icon: "mdi-flash-alert",
      color: "yellow-darken-1",
    }
  }

  return {
    icon: "mdi-flash-off",
    color: "purple",
  }
})
const thresholdIcon = computed(() => {
  if (statusStore.status.conditions.threshold === 0) return null

  if (statusStore.status.conditions.threshold > 0) {
    return {
      icon: "mdi-shield-plus",
      color: "green",
    }
  }

  return {
    icon: "mdi-shield-off",
    color: "orange",
  }
})
const stepCountIcon = computed(() => {
  const stepCount = statusStore.status.conditions.stepCount ?? 0

  if (stepCount === 0) return null

  if (stepCount > 0) {
    return {
      icon: "mdi-arrow-up-bold-hexagon-outline",
      color: "teal",
    }
  }

  return {
    icon: "mdi-arrow-down-bold-hexagon-outline",
    color: "red",
  }
})

const haveAnyCondition = computed(
  () =>
    !!HPIcon.value ||
    !!MPIcon.value ||
    !!thresholdIcon.value ||
    !!stepCountIcon.value,
)
</script>
