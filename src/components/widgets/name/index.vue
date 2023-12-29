<template>
  <v-container class="pa-0">
    <v-row>
      <v-col>
        <AltTextField
          v-model="name"
          label="Имя"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import AltTextField from "@/components/atoms/text-field.vue";
import { usePersonalInfoStore } from "@/store/stores/personal-info";
import { computed } from "vue";

const personalInfoStore = usePersonalInfoStore()

const name = computed({
  get: () => personalInfoStore.name,
  set: (value: string) => personalInfoStore.setName(value)
})
</script>
