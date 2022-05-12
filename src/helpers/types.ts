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
