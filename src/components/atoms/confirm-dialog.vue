<template>
  <v-dialog
    v-model="isShowDialog"
    width="auto"
  >
    <v-card
      :title="props.title"
      :text="props.text"
    >
      <v-card-actions class="justify-space-around">
        <v-btn
          color="primary"
          variant="text"
          @click="approve()"
        >
          Да
        </v-btn>
        <v-btn
          color="secondaty"
          variant="text"
          @click="isShowDialog = false"
        >
          Отмена
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  modelValue: boolean,
  title: string,
  text?: string,
}

const props = defineProps<Props>()
const emit = defineEmits<{
  'update:modelValue': [value: boolean]
  'confirm': []
}>()

const isShowDialog = computed({
  get: () => props.modelValue,
  set: (value: boolean) => emit('update:modelValue', value)
})

const approve = () => {
  emit('confirm')

  isShowDialog.value = false
}
</script>