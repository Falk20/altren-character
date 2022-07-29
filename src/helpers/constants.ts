export const defaultHits = 4;
export const defaultMana = 5;
export const defaultThreshold = 4;
export const defaultInspiration = 6;
export const defaultBasij = 2;
export const maxBasij = 10;
export const statusStorageKey = "character-status";
export const statsStorageKey = "character-stats";
export const personalInfoStorageKey = "character-personal-info";
export const inventoryStorageKey = "character-inventory";

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

export const skills = {
  strength: {
    oneHandedWeapons: {
      title: "Одноручное оружие",
    },
    twoHandedWeapons: {
      title: "Двуручное оружие",
    },
    blackCraft: {
      title: "Чёрное ремесло",
    },
    shield: {
      title: "Щит",
    },
    mulePower: {
      title: "Сила мула",
      affects: ["bagCapacity"],
    },
    fistFight: {
      title: "Кулачный бой",
    },
    blacksmith: {
      title: "Кузнец",
    },
  },
  agility: {
    survival: {
      title: "Выживание",
    },
    hacking: {
      title: "Взлом",
    },
    accuracy: {
      title: "Меткость",
    },
    bow: {
      title: "Лук",
    },
    crossbow: {
      title: "Арбалет",
    },
    horseRiding: {
      title: "Верховая езда",
    },
    dagger: {
      title: "Кинжал",
    },
    attentiveness: {
      title: "Внимательность",
    },
    vigilance: {
      title: "Бдительность",
    },
    evasion: {
      title: "Уклонение",
    },
    pairedWeapons: {
      title: "Парное оружие",
    },
    parrying: {
      title: "Парирование",
    },
    athletics: {
      title: "Атлетика",
      affects: ["speed"],
    },
    shaftWeapons: {
      title: "Древковое оружие",
    },
    cloaking: {
      title: "Маскировка",
    },
  },
  intelligence: {
    alchemy: {
      title: "Алхимия",
    },
    engineering: {
      title: "Инженерия",
    },
    languages: {
      title: "Языки",
    },
    aid: {
      title: "Первая помощь",
    },
    medicine: {
      title: "Медицина",
    },
    jewelry: {
      title: "Ювелирное дело",
    },
    herbalism: {
      title: "Травничество",
    },
    occultism: {
      title: "Оккультизм",
    },
  },
  charisma: {
    trade: {
      title: "Торговля",
    },
    eloquence: {
      title: "Красноречие",
    },
    leadership: {
      title: "Лидерство",
    },
  },
  endurance: {
    stances: {
      title: "Стойки",
      affects: ["stanceModificator"],
    },
    natureResist: {
      title: "Сопротивление природе",
    },
    cursesResist: {
      title: "Сопротивление проклятиям",
    },
    feather: {
      title: "Пёрышко",
    },
    health: {
      title: "",
      affects: ["maxHits"],
    },
  },
};
