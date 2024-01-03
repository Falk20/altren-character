import { INotes } from "@/helpers/types";
import { saveState } from "@/helpers/utils";
import { generateState } from "@/helpers/utils/notes";
import { notesStorageKey } from "@/helpers/constants";
import { defineStore } from "pinia";
import store from "..";

export const useNotesStore = defineStore("notesStore", {
  state: (): INotes => generateState(),

  actions: {
    addNewNote() {
      this.notes.push("");
    },

    editNote(index: number, value: string) {
      this.notes[index] = value;
    },

    removeNote(index: number) {
      this.notes.splice(index, 1);
    },

    addNewQuest() {
      this.quests.push("");
    },

    editQuest(index: number, value: string) {
      this.quests[index] = value;
    },

    removeQuest(index: number) {
      this.quests.splice(index, 1);
    },
  },
});

useNotesStore(store).$onAction(({ after, store }) => {
  after(() => {
    saveState(notesStorageKey, store.$state);
  });
});
