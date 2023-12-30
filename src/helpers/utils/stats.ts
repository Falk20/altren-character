import { Stats, statsStorageKey } from "@/helpers/constants";
import { getState } from "@/helpers/utils";

const defaultValue: Record<Stats, number> = {
  strength: 0,
  agility: 0,
  intelligence: 0,
  charisma: 0,
  endurance: 0,
};

export function generateState(): Record<Stats, number> {
  return getState(
    statsStorageKey,
    defaultValue,
    "В хранилище невалидные данные о характеристиках персонажа"
  );
}
