<template>
  <v-container>
    <v-row
      no-gutters
      class="mb-4"
    >
      <v-btn
        prepend-icon="mdi-plus"
        block
        @click="addNewNote"
      >
        Добавить
      </v-btn>
    </v-row>

    <v-textarea
      v-for="(note, index) in notes"
      :key="'note' + index"
      :model-value="note"
      @update:model-value="(value) => editNote(index, value)"
      rows="2"
      variant="solo"
    >
      <template v-slot:append-inner>
        <v-btn
          block
          density="compact"
          variant="text"
          color="red"
          icon="mdi-trash-can"
          @click="removeNote(index)"
        />
      </template>
    </v-textarea>

    <v-dialog
      v-model="isShowDialog"
      width="200px"
    >
      <v-card>
        <v-card-text>
          Удалить заметку?
        </v-card-text>
        <v-card-actions class="justify-space-around">
          <v-btn
            color="primary"
            variant="text"
            @click="approveRemoving()"
          >
            Да
          </v-btn>
          <v-btn
            color="secondaty"
            variant="text"
            @click="removedNoteIndex = null"
          >
            Отмена
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script setup lang="ts">
import { useNotesStore } from '@/store/stores/notes'
import { ref } from 'vue';
import { computed } from 'vue';

const notesStore = useNotesStore()

const removedNoteIndex = ref<number | null>(null)
const isShowDialog = computed(() => typeof removedNoteIndex.value === 'number')

const notes = computed(() => notesStore.notes)

const addNewNote = () => notesStore.addNewNote()

const editNote = (index: number, value: string) => notesStore.editNote(index, value)

const removeNote = (index: number) => removedNoteIndex.value = index

const approveRemoving = () => {
  if (typeof removedNoteIndex.value === 'number') {
    notesStore.removeNote(removedNoteIndex.value)
    removedNoteIndex.value = null
  }
}
</script>
