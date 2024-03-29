import { User } from "firebase/auth";
import { Stats } from "./constants";

export interface IAuth {
  user: User | null;
}

export interface IStatus {
  hits: number;
  mana: number;
  inspiration: number;

  fatigue: number;

  conditions: IConditions;
}

export interface IConditions {
  HP: number;
  MP: number;
  threshold: number;
}

export type TStatusFieldName = "hits" | "mana" | "inspiration" | "fatigue";
export type TConditionsFieldName = "HP" | "MP" | "threshold";

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
  skills: Record<Stats, Record<string, number>>;
}

export interface ISkill {
  title: string;
  value: string;
  affects?: string[];
}

export interface IInventory {
  wallet: number;
  bags: IBag[];
}

export interface IBag {
  title: string;
  capacity: number;
  items: IItemTypes[];
}

export type IEquipmentTypes = IArmor | IWeapon | IProjectile | IItemStackeble;
export type IItemTypes = IItemNonStackeble | IEquipmentTypes;

export interface INotes {
  notes: string[];
  quests: string[];
}

export interface IAbility {
  title: string;
  description: string;
}

export interface IAbilities {
  abilities: IAbility[];
}

export enum ItemTypes {
  stackable = "stackable",
  nonStackable = "nonStackable",
  armor = "armor",
  weapon = "weapon",
  projectile = "projectile",
}

export interface IDamage {
  isPositive: boolean;
  value: number;
  modificator: number;
}

export interface IItem {
  title: string;
  description: string;
  type: ItemTypes;
  weight: number;
  count?: number;
  protection?: number;
  damage?: IDamage[];
  isEquiped?: boolean;
}

export interface IEquipment extends IItem {
  isEquiped: boolean;
}

export interface IItemNonStackeble extends IItem {
  type: ItemTypes.nonStackable;
}

export interface IItemStackeble extends IEquipment {
  type: ItemTypes.stackable;
  count: number;
}

export interface IWeapon extends IEquipment {
  type: ItemTypes.weapon;
  damage: IDamage[];
}

export interface IArmor extends IEquipment {
  type: ItemTypes.armor;
  protection: number;
}

export interface IProjectile extends IEquipment {
  type: ItemTypes.projectile;
  count: number;
  damage: IDamage[];
}

export interface IEquipments {
  armors: IArmor[];
  weapons: IWeapon[];
  projectiles: IProjectile[];
  consumables: IItemStackeble[];
}

export interface ICharacter {
  id: string;
  owner: string;
  personalInfo: IPersonalInfo;
  stats: Record<Stats, number>;
  skills: ISkills;
  inventory: IInventory;
  status: IStatus;
  notes: INotes;
  abilities: IAbilities;
}
