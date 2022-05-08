import { IStatus } from "@/helpers/types";

const KEY = "character-state";

export function generateState(): IStatus {
  const storageValue = localStorage.getItem(KEY);

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
    maxHits: 4,
    mana: 5,
    maxMana: 5,

    basisThreshold: 5,
    fatigueLevel: 0,

    money: 0,

    equipment: {
      weapons: [],
      armors: [],
    },

    conditions: [],
  };
}
