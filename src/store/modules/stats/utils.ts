import { statsStorageKey } from "@/helpers/constants";

export function generateState(): Record<string, number> {
  const storageValue = localStorage.getItem(statsStorageKey);

  if (storageValue) {
    try {
      const status: Record<string, number> = JSON.parse(storageValue);

      return status;
    } catch {
      console.error(
        "В хранилище невалидные данные о характеристиках персонажа"
      );
    }
  }

  return {
    strength: 0,
    agility: 0,
    intelligence: 0,
    charisma: 0,
    endurance: 0,
  };
}
