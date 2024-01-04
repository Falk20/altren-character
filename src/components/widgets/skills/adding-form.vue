<template>
  <div>
    <AltSelectField
      v-model:value="selectedSkill"
      :items="skillsDictionary"
      label="Новый навык"
    />

    <v-btn
      class="mt-4"
      variant="tonal"
      size="small"
      flat
      block
      color="green"
      :disabled="!selectedSkill"
      @click="addSkill"
    >
      Добавить
    </v-btn>
  </div>
</template>

<script setup lang="ts">
import { ISkill } from "@/helpers/types";
import AltSelectField from "@/components/atoms/select-field.vue";
import { Stats } from "@/helpers/constants";
import { ref } from "vue";
import { useSkillsStore } from "@/store/stores/skills";

export interface Props {
  statName: Stats,
  skillsDictionary: ISkill[]
}

const props = defineProps<Props>()

const emit = defineEmits(["close-form"])

const skillsStore = useSkillsStore()

const selectedSkill = ref(props.skillsDictionary[0].value)

const addSkill = () => {
  skillsStore.setSkill(selectedSkill.value, 1, props.statName)

  emit('close-form')
}
</script>
