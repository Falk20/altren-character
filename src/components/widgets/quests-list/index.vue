<template>
  <v-container>
    <v-row no-gutters class="mb-4">
      <v-btn
        prepend-icon="mdi-plus"
        block
        variant="tonal"
        color="green"
        @click="addNewQuest"
      >
        Добавить
      </v-btn>
    </v-row>

    <draggable
      v-model="quests"
      @start="drag = true"
      @end="drag = false"
      item-key="index"
      handle=".handle"
    >
      <template #item="{ element, index }">
        <v-textarea
          :model-value="element"
          @update:model-value="(value) => editQuest(index, value)"
          rows="2"
          auto-grow
          variant="solo"
        >
          <template v-slot:append-inner>
            <v-btn
              block
              density="compact"
              variant="plain"
              color="red"
              icon="mdi-trash-can"
              @click="removeQuest(index)"
            />
          </template>

          <template v-slot:prepend-inner>
            <v-icon
              class="handle cursor-grab"
              size="32"
              color="teal"
              icon="mdi-drag"
            />
          </template>
        </v-textarea>
      </template>
    </draggable>

    <confirm-dialog
      v-model="isShowDialog"
      title="Удалить заметку?"
      @confirm="approveRemoving"
    />
  </v-container>
</template>

<script setup lang="ts">
import draggable from "vuedraggable"
import ConfirmDialog from "@/components/atoms/confirm-dialog.vue"
import { useNotesStore } from "@/store/stores/notes"
import { ref } from "vue"
import { computed } from "vue"

const drag = ref(false)

const notesStore = useNotesStore()

const removedQuestIndex = ref<number | null>(null)
const isShowDialog = computed({
  get: () => typeof removedQuestIndex.value === "number",
  set: (value) => {
    if (!value) removedQuestIndex.value = null
  },
})

const quests = computed({
  get: () => notesStore.quests,
  set: (newValue) => (notesStore.quests = newValue),
})

const addNewQuest = () => notesStore.addNewQuest()

const editQuest = (index: number, value: string) =>
  notesStore.editQuest(index, value)

const removeQuest = (index: number) => (removedQuestIndex.value = index)

const approveRemoving = () => {
  if (typeof removedQuestIndex.value === "number") {
    notesStore.removeQuest(removedQuestIndex.value)
  }
}
</script>
