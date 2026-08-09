import { defaultMaxSkillPointCount } from "@/helpers/constants"

export function getMaxSkillPointCount(intelligence: number) {
  return defaultMaxSkillPointCount + intelligence * 10
}
