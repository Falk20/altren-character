import {
  defaultMaxSkillPointCount,
  skillsStorageKey,
  Stats,
} from "@/helpers/constants";
import { ISkills } from "@/helpers/types";
import { getState } from "@/helpers/utils";

const defaultValue: ISkills = {
  skills: {
    [Stats.strength]: {},
    [Stats.agility]: {},
    [Stats.intelligence]: {},
    [Stats.charisma]: {},
    [Stats.endurance]: {},
  },
};

export function generateState(): ISkills {
  return getState(
    skillsStorageKey,
    defaultValue,
    "В хранилище невалидные данные о характеристиках персонажа"
  );
}

export function getMaxSkillPointCount(intelligence: number) {
  return defaultMaxSkillPointCount + intelligence * 10;
}
