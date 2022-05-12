import { IStatus } from "./types";

export function saveState(stateName: string, state: IStatus): void {
  const stringifiedState = JSON.stringify(state);

  localStorage.setItem(stateName, stringifiedState);
}
