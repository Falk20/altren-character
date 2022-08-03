import { IInventory, IPersonalInfo, ISkills, IStatus } from "./types";
import { BasijBar, EPBar, MPBar } from "./viewConstants";

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
