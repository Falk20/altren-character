export interface IStatus {
  hits: number;
  maxHits: number;
  mana: number;
  maxMana: number;

  basisThreshold: number;
  fatigueLevel: number;

  money: number;

  equipment: IEquipment;

  conditions: ICondition[];
}

export interface IEquipment {
  weapons: IWeapon[];
  armors: IArmor[];
}

export interface IItem {
  title: string;
  description: string;
}

export interface IWeapon extends IItem {
  damageDice: number;
  damageModificator: number;
}

export interface IArmor extends IItem {
  protection: number;
}

export enum ConditionTypes {
  boon = "boon",
  curse = "curse",
  neutral = "neutral",
}

export interface ICondition {
  title: string;
  description: string;

  type: ConditionTypes;

  affects: string;

  value: number;
}
