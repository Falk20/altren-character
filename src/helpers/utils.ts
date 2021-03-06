import { IPersonalInfo, IStatus } from "./types";

export function saveState(
  stateName: string,
  state: IStatus | IPersonalInfo | Record<string, number>
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
