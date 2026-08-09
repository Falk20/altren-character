import { BasijBar, EPBar, MPBar } from "../viewConstants"

export function getCurrentPointBar(isMage: boolean, isBasij: boolean) {
  if (isMage && isBasij) return BasijBar

  if (isMage && !isBasij) return MPBar

  return EPBar
}
