import { INotes } from "@/helpers/types";
import { notesStorageKey } from "@/helpers/constants";
import { getState } from "@/helpers/utils";

export const defaultNotes: INotes = {
  notes: [],
  quests: [],
};

export function generateState(): INotes {
  const state = getState(
    notesStorageKey,
    defaultNotes,
    "В хранилище невалидные данные о заметках персонажа",
  );
  return state.quests
    ? state
    : {
        ...state,
        quests: [],
      };
}
