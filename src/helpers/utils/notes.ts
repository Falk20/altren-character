import { INotes } from "@/helpers/types";
import { notesStorageKey } from "@/helpers/constants";
import { getState } from "@/helpers/utils";

export const defaultNotes: INotes = {
  notes: [],
};

export function generateState(): INotes {
  return getState(
    notesStorageKey,
    defaultNotes,
    "В хранилище невалидные данные о заметках персонажа"
  );
}
