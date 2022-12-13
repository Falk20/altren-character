import { IInventory, IPersonalInfo, ISkills, IStatus } from "./types";
import { BasijBar, EPBar, MPBar } from "./viewConstants";

import { generateState as generateInventory } from "@/store/modules/character/inventory/utils";
import { generateState as generateStatus } from "@/store/modules/character/status/utils";
import { generateState as generateStats } from "@/store/modules/character/stats/utils";
import { generateState as generatePersonalInfo } from "@/store/modules/character/personal-info/utils";
import { generateState as generateSkills } from "@/store/modules/character/skills/utils";
import {
  idStorageKey,
  statusStorageKey,
  statsStorageKey,
  personalInfoStorageKey,
  inventoryStorageKey,
  skillsStorageKey,
} from "./constants";

export function saveState(
  stateName: string,
  state: IStatus | IPersonalInfo | IInventory | ISkills | Record<string, number>
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

export function getDiceIcon(value: number) {
  switch (value) {
    case 1:
      return "mdi-dice-d4";
    case 2:
      return "mdi-dice-d6";
    case 3:
      return "mdi-dice-d8";
    case 4:
      return "mdi-dice-d10";
    case 5:
      return "mdi-dice-d12";
    case 6:
      return "mdi-dice-d20";
  }
  return "mdi-dice-d4";
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
