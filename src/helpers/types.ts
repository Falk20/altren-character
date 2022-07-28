export interface IStatus {
  hits: number;
  mana: number;
  inspiration: number;

  fatigue: number;

  conditions: IConditions;
}

export interface IPersonalInfo {
  isMage: boolean;
  isBasij: boolean;
  basijLevel: number;
  isBard: boolean;
  name: string;
  race: string;
  telents: unknown[];
  mutations: unknown[];
}

export interface IInventory {
  wallet: number;
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

export interface IConditions {
  HP: number;
  MP: number;
  threshold: number;
}
