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
  talents: unknown[];
  mutations: unknown[];
  karma: number;
  fame: number;
}

export interface ISkills {
  skills: Record<string, Record<string, number>>;
}

export interface ISetSkillPayload {
  name: string;
  level: number;
  statName: string;
}

export interface ISkill {
  title: string;
  value: string;
  affects?: string[];
}

export interface IInventory {
  wallet: number;
  bags?: IBag[];
}

export interface IBag {
  title: string;
  capacity: number;
  items: IItem[];
}

export enum ItemTypes {
  stackable = "stackable",
  nonStackable = "nonStackable",
  armor = "armor",
  weapon = "weapon",
  projectile = "projectile",
}

export enum DamageTypes {
  dice = "dice",
  modificator = "modificator",
}

export interface IDamage {
  type: DamageTypes;
  value: number;
}

export interface IItem {
  title: string;
  description: string;
  type: ItemTypes;
  weight: number;
}

export interface IItemStackeble extends IItem {
  type: ItemTypes.stackable;
  count: number;
}

export interface IWeapon extends IItem {
  type: ItemTypes.weapon;
  damage: IDamage[];
}

export interface IArmor extends IItem {
  type: ItemTypes.armor;
  protection: number;
}

export interface IProjectile extends IItem {
  type: ItemTypes.projectile;
  count: number;
  damage: IDamage[];
}

export interface IEquipment {
  weapons: IWeapon[];
  armors: IArmor[];
  projectiles: IProjectile[];
}

export interface IConditions {
  HP: number;
  MP: number;
  threshold: number;
}
