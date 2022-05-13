export interface IStatus {
  hits: number;
  mana: number;

  fatigue: number;

  conditions: ICondition[];
}

export enum ItemTypes {
  stackable = "stackable",
  nonStackable = "nonStackable",
  armor = "armor",
  weapon = "weapon",
  projectile = "projectile",
  food = "food",
}

export interface IItem {
  title: string;
  description: string;
  type: ItemTypes;
}

export interface IWeapon extends IItem {
  type: ItemTypes.weapon;
  damageDice: number;
  damageModificator: number;
}

export interface IArmor extends IItem {
  type: ItemTypes.armor;
  protection: number;
}

export interface IProjectile extends IItem {
  type: ItemTypes.projectile;
  damageDice: number;
  damageModificator: number;
}

export interface IEquipment {
  weapons: IWeapon[];
  armors: IArmor[];
}

export enum ConditionTypes {
  plusHP = "plusHP",
  minusHP = "minusHP",
  plusMP = "plusMP",
  minusMP = "minusMP",
}

export enum ConditionTitles {
  plusHP = "Увеличение здоровья",
  minusHP = "Уменьшение здоровья",
  plusMP = "Увеличение маны",
  minusMP = "Уменьшение маны",
}

export interface ICondition {
  title: string;
  description: string;
  icon: string;
  color: string;

  type: ConditionTypes;

  value: number;
}
