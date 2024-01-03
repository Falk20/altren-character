<template>
  <v-card class="mt-4">
    <v-card-item>
      <v-card-title>
        <text-field
          v-model="title"
          label="Название"
        />
      </v-card-title>
      <template #append>
        <v-btn
          block
          density="compact"
          variant="plain"
          color="red"
          icon="mdi-trash-can"
          @click="isShowDialog = true"
        />
      </template>
    </v-card-item>

    <v-card-text>
      <v-textarea
        v-model="description"
        label="Описание"
        rows="2"
        auto-grow
        variant="solo"
        hide-details
      />
    </v-card-text>

    <confirm-dialog
      v-model="isShowDialog"
      title="Удалить способность?"
      @confirm="remove"
    />
  </v-card>
</template>

<script setup lang="ts">
import ConfirmDialog from '@/components/atoms/confirm-dialog.vue';
import TextField from '@/components/atoms/text-field.vue';
import { IAbility } from '@/helpers/types';
import { useAbilitiesStore } from '@/store/stores/abilities';
import { computed } from 'vue';
import { ref } from 'vue';

interface Props {
  ability: IAbility
}

const props = defineProps<Props>()

const abilitiesStore = useAbilitiesStore()

const isShowDialog = ref(false)

const title = computed({
  get: () => props.ability.title,
  set: (value: string) => abilitiesStore.editAbilityTitle(props.ability, value)
})

const description = computed({
  get: () => props.ability.description,
  set: (value: string) => abilitiesStore.editAbilityDescription(props.ability, value)
})

const remove = () => {
  abilitiesStore.removeAbility(props.ability)

  isShowDialog.value = false
}
</script>