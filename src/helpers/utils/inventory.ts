import { IInventory } from "@/helpers/types";
import { inventoryStorageKey } from "@/helpers/constants";
import { getState } from "@/helpers/utils";

const defaultValue: IInventory = {
  wallet: 0,
  bags: [],
};

export function generateState(): IInventory {
  return getState(
    inventoryStorageKey,
    defaultValue,
    "В хранилище невалидные данные об инвентаре персонажа"
  );
}
