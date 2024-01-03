<template>
  <v-list-item
    color="green"
    :active="props.item.id === currentID"
  >
    <v-list-item-title>
      {{ props.item.personalInfo.name || "Нет имени" }}
    </v-list-item-title>
    <template #append>
      <v-btn
        class="mr-2"
        variant="tonal"
        size="small"
        rounded="lg"
        @click="isShowUpdateConfrim = true"
        icon="mdi-cloud-download"
      />

      <confirm-dialog
        v-model="isShowUpdateConfrim"
        :title="`Загрузить ${props.item.personalInfo.name || 'Нет имени'}?`"
        text="Локальная версия будет утеряна!"
        @confirm="loadFromServer(props.item)"
      />

      <v-btn
        variant="tonal"
        size="small"
        rounded="lg"
        color="red"
        @click="isShowDeleteConfrim = true"
        icon="mdi-trash-can"
      />

      <confirm-dialog
        v-model="isShowDeleteConfrim"
        :title="`Удалить ${props.item.personalInfo.name || 'Нет имени'}?`"
        text="Восстановление невозможно!"
        @confirm="removeFromServer(props.item)"
      />
    </template>
  </v-list-item>
</template>

<script setup lang="ts">
import ConfirmDialog from "@/components/atoms/confirm-dialog.vue";
import { removeCharList } from "@/firebase/db";
import { ICharacter } from "@/helpers/types";
import { setCharacterState } from "@/helpers/utils";
import { ref } from "vue";

interface Props {
  item: ICharacter
}

const props = defineProps<Props>()
const emit = defineEmits<{
  'updateList': []
}>()

const isShowUpdateConfrim = ref(false)
const isShowDeleteConfrim = ref(false)
const currentID = localStorage.getItem("charlistID")

const loadFromServer = (character: ICharacter) => {
  setCharacterState(character);
}

const removeFromServer = async (character: ICharacter) => {
  await removeCharList(character.id)

  emit('updateList')
}
</script>