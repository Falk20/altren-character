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
