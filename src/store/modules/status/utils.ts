import { IStatus } from "@/helpers/types";
import { statusStorageKey } from "@/helpers/constants";

export function generateState(): IStatus {
  const storageValue = localStorage.getItem(statusStorageKey);

  if (storageValue) {
    try {
      const status: IStatus = JSON.parse(storageValue);

      return status;
    } catch {
      console.error("В хранилище невалидные данные о статусе персонажа");
    }
  }

  return {
    hits: 4,
    mana: 5,

    fatigue: 0,

    conditions: [],
  };
}
