import { statsStorageKey } from "@/helpers/constants";
import { getState } from "@/helpers/utils";

const defaultValue: Record<string, number> = {
  strength: 0,
  agility: 0,
  intelligence: 0,
  charisma: 0,
  endurance: 0,
};

export function generateState(): Record<string, number> {
  return getState(
    statsStorageKey,
    defaultValue,
    "В хранилище невалидные данные о характеристиках персонажа"
  );
}
