import { IStatus } from "@/helpers/types";
import { statusStorageKey } from "@/helpers/constants";
import { getState } from "@/helpers/utils";

const defaultValue: IStatus = {
  hits: 4,
  mana: 5,

  fatigue: 0,

  conditions: {
    HP: 0,
    MP: 0,
    threshold: 0,
  },
};

export function generateState(): IStatus {
  return getState(
    statusStorageKey,
    defaultValue,
    "В хранилище невалидные данные о статусе персонажа"
  );
}
