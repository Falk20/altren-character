import { ItemTypes } from "./types";

export const defaultHits = 4;
export const defaultMana = 5;
export const defaultThreshold = 4;
export const defaultInspiration = 6;
export const defaultBasij = 2;
export const maxBasij = 10;
export const maxSkillCount = 13;
export const defaultStepCount = 3;
export const statusStorageKey = "character-status";
export const statsStorageKey = "character-stats";
export const personalInfoStorageKey = "character-personal-info";
export const inventoryStorageKey = "character-inventory";
export const skillsStorageKey = "character-skills";

export const humanID = "human";
export const malfID = "malf";
export const beastmanID = "beastman";

export const kinds = [
  {
    title: "Человек",
    value: humanID,
  },
  {
    title: "Мальф",
    value: malfID,
  },
  {
    title: "Зверолюд",
    value: beastmanID,
  },
];

export enum Stats {
  strength = "strength",
  agility = "agility",
  intelligence = "intelligence",
  charisma = "charisma",
  endurance = "endurance",
}

export const statsWithSkills = {
  [Stats.strength]: {
    title: "Сила",
    skills: [
      {
        title: "Одноручное оружие",
        value: "oneHandedWeapons",
      },
      {
        title: "Двуручное оружие",
        value: "twoHandedWeapons",
      },
      {
        title: "Чёрное ремесло",
        value: "blackCraft",
      },
      {
        title: "Щит",
        value: "shield",
      },
      {
        title: "Сила мула",
        affects: ["bagCapacity"],
        value: "mulePower",
      },
      {
        title: "Кулачный бой",
        value: "fistFight",
      },
      {
        title: "Кузнец",
        value: "blacksmith",
      },
    ],
  },
  [Stats.agility]: {
    title: "Ловкость",
    skills: [
      {
        title: "Выживание",
        value: "survival",
      },
      {
        title: "Взлом",
        value: "hacking",
      },
      {
        title: "Меткость",
        value: "accuracy",
      },
      {
        title: "Лук",
        value: "bow",
      },
      {
        title: "Арбалет",
        value: "crossbow",
      },
      {
        title: "Верховая езда",
        value: "horseRiding",
      },
      {
        title: "Кинжал",
        value: "dagger",
      },
      {
        title: "Внимательность",
        value: "attentiveness",
      },
      {
        title: "Бдительность",
        value: "vigilance",
      },
      {
        title: "Уклонение",
        value: "evasion",
      },
      {
        title: "Парное оружие",
        value: "pairedWeapons",
      },
      {
        title: "Парирование",
        value: "parrying",
      },
      {
        title: "Атлетика",
        affects: ["speed"],
        value: "athletics",
      },
      {
        title: "Древковое оружие",
        value: "shaftWeapons",
      },
      {
        title: "Маскировка",
        value: "cloaking",
      },
    ],
  },
  [Stats.intelligence]: {
    title: "Интеллект",
    skills: [
      {
        title: "Алхимия",
        value: "alchemy",
      },
      {
        title: "Инженерия",
        value: "engineering",
      },
      {
        title: "Языки",
        value: "languages",
      },
      {
        title: "Первая помощь",
        value: "aid",
      },
      {
        title: "Медицина",
        value: "medicine",
      },
      {
        title: "Ювелирное дело",
        value: "jewelry",
      },
      {
        title: "Травничество",
        value: "herbalism",
      },
      {
        title: "Оккультизм",
        value: "occultism",
      },
    ],
  },
  [Stats.charisma]: {
    title: "Харизма",
    skills: [
      {
        title: "Торговля",
        value: "trade",
      },
      {
        title: "Красноречие",
        value: "eloquence",
      },
      {
        title: "Лидерство",
        value: "leadership",
      },
    ],
  },
  [Stats.endurance]: {
    title: "Выносливость",
    skills: [
      {
        title: "Стойки",
        affects: ["stanceModificator"],
        value: "stances",
      },
      {
        title: "Сопротивление природе",
        value: "natureResist",
      },
      {
        title: "Сопротивление проклятиям",
        value: "cursesResist",
      },
      {
        title: "Пёрышко",
        value: "feather",
      },
      {
        title: "Здоровье",
        affects: ["maxHits"],
        value: "health",
      },
    ],
  },
};

export const dices = [
  {
    title: "d4",
    value: 1,
  },
  {
    title: "d6",
    value: 2,
  },
  {
    title: "d8",
    value: 3,
  },
  {
    title: "d10",
    value: 4,
  },
  {
    title: "d12",
    value: 5,
  },
  {
    title: "d20",
    value: 6,
  },
];

export const itemTypes = [
  {
    title: "Один",
    value: ItemTypes.nonStackable,
  },
  {
    title: "Несколько",
    value: ItemTypes.stackable,
  },
  {
    title: "Одежда",
    value: ItemTypes.armor,
  },
  {
    title: "Оружие",
    value: ItemTypes.weapon,
  },
  {
    title: "Снаряды",
    value: ItemTypes.projectile,
  },
];
