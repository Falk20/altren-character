import { IAbilities } from "@/helpers/types";
import { abilitiesStorageKey } from "@/helpers/constants";
import { getState } from "@/helpers/utils";

export const defaultAbilities: IAbilities = {
  abilities: [],
};

export function generateState(): IAbilities {
  const state = getState(
    abilitiesStorageKey,
    defaultAbilities,
    "В хранилище невалидные данные о способностях персонажа",
  );
  return state;
}
