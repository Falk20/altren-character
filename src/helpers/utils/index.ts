import { IInventory, IPersonalInfo, ISkills, IStatus } from "../types";
import { BasijBar, EPBar, MPBar } from "../viewConstants";

import { generateState as generateInventory } from "@/helpers/utils/inventory";
import { generateState as generateStatus } from "@/store/modules/character/status/utils";
import { generateState as generateStats } from "@/helpers/utils/stats";
import { generateState as generatePersonalInfo } from "@/helpers/utils/personal-info";
import { generateState as generateSkills } from "@/store/modules/character/skills/utils";
import {
  idStorageKey,
  statusStorageKey,
  statsStorageKey,
  personalInfoStorageKey,
  inventoryStorageKey,
  skillsStorageKey,
  Stats,
} from "../constants";

export function saveState(
  stateName: string,
  state: IStatus | IPersonalInfo | IInventory | ISkills | Record<Stats, number>
): void {
  const stringifiedState = JSON.stringify(state);

  localStorage.setItem(stateName, stringifiedState);
}

export function getState(
  storageKey: string,
  defaultValue: unknown,
  errorText: string
) {
  const storageValue = localStorage.getItem(storageKey);

  if (storageValue) {
    try {
      return JSON.parse(storageValue);
    } catch {
      console.error(errorText);
    }
  }

  return defaultValue;
}

export function getCurrentPointBar(isMage: boolean, isBasij: boolean) {
  if (isMage && isBasij) return BasijBar;

  if (isMage && !isBasij) return MPBar;

  return EPBar;
}

export function generateCharlist() {
  return {
    inventory: generateInventory(),
    status: generateStatus(),
    stats: generateStats(),
    personalInfo: generatePersonalInfo(),
    skills: generateSkills(),
  };
}

export function setCharacterState(item: any) {
  localStorage.setItem(idStorageKey, item.id);
  saveState(statusStorageKey, item.status);
  saveState(statsStorageKey, item.stats);
  saveState(personalInfoStorageKey, item.personalInfo);
  saveState(inventoryStorageKey, item.inventory);
  saveState(skillsStorageKey, item.skills);

  window.location.reload();
}
