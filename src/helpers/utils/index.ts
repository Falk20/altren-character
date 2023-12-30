import {
  ICharacter,
  IInventory,
  IPersonalInfo,
  ISkills,
  IStatus,
} from "../types";
import { BasijBar, EPBar, MPBar } from "../viewConstants";

import { generateState as generateInventory } from "@/helpers/utils/inventory";
import { generateState as generateStatus } from "@/helpers/utils/status";
import { generateState as generateStats } from "@/helpers/utils/stats";
import { generateState as generatePersonalInfo } from "@/helpers/utils/personal-info";
import { generateState as generateSkills } from "@/helpers/utils/skills";
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
  defaultValue:
    | IStatus
    | IPersonalInfo
    | IInventory
    | ISkills
    | Record<Stats, number>,
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

export function setCharacterState(character: ICharacter) {
  localStorage.setItem(idStorageKey, character.id);
  saveState(statusStorageKey, character.status);
  saveState(statsStorageKey, character.stats);
  saveState(personalInfoStorageKey, character.personalInfo);
  saveState(inventoryStorageKey, character.inventory);
  saveState(skillsStorageKey, character.skills);

  window.location.reload();
}
