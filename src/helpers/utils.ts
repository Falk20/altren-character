import { IStatus } from "./types";

export function saveState(
  stateName: string,
  state: IStatus | Record<string, number>
): void {
  const stringifiedState = JSON.stringify(state);

  localStorage.setItem(stateName, stringifiedState);
}
