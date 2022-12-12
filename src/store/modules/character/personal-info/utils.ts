import { IPersonalInfo } from "@/helpers/types";
import { personalInfoStorageKey } from "@/helpers/constants";
import { getState } from "@/helpers/utils";

const defaultValue: IPersonalInfo = {
  isMage: false,
  isBasij: false,
  basijLevel: 2,
  isBard: false,
  name: "",
  race: "",
  talents: [],
  mutations: [],
  karma: 0,
  fame: 0,
};

export function generateState(): IPersonalInfo {
  return getState(
    personalInfoStorageKey,
    defaultValue,
    "В хранилище невалидные данные о личности персонажа"
  );
}
