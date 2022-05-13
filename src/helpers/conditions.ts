import { ConditionTitles, ConditionTypes, ICondition } from "./types";

class Condition implements ICondition {
  title: string;
  description: string;
  icon: string;
  color: string;

  type: ConditionTypes;

  value: number;

  constructor({ title, description, icon, color, type, value }: ICondition) {
    this.title = title;
    this.description = description;
    this.icon = icon;
    this.color = color;
    this.type = type;
    this.value = value;
  }
}

export class ConditionFactory {
  create(type: ConditionTypes | string, value: number) {
    switch (type) {
      case ConditionTypes.plusHP: {
        return new Condition({
          title: ConditionTitles.plusHP,
          description: "Увеличивает максимальное кол-во здоровья",
          icon: "mdi-heart",
          color: "red",
          type: ConditionTypes.plusHP,
          value: value,
        });
      }
      case ConditionTypes.minusHP: {
        return new Condition({
          title: ConditionTitles.minusHP,
          description: "Уменьшает максимальное кол-во здоровья",
          icon: "mdi-heart-broken",
          color: "black",
          type: ConditionTypes.minusHP,
          value: value,
        });
      }
      case ConditionTypes.plusMP: {
        return new Condition({
          title: ConditionTitles.plusMP,
          description: "Увеличивает максимальное кол-во маны",
          icon: "mdi-star-plus",
          color: "primary",
          type: ConditionTypes.plusMP,
          value: value,
        });
      }
      case ConditionTypes.minusMP:
      default: {
        return new Condition({
          title: ConditionTitles.minusMP,
          description: "Уменьшает максимальное кол-во маны",
          icon: "mdi-star-minus",
          color: "primary",
          type: ConditionTypes.minusMP,
          value: value,
        });
      }
    }
  }
}

export const conditionList = [
  {
    value: ConditionTypes.plusHP,
    title: ConditionTitles.plusHP,
  },
  {
    value: ConditionTypes.minusHP,
    title: ConditionTitles.minusHP,
  },
  {
    value: ConditionTypes.plusMP,
    title: ConditionTitles.plusMP,
  },
  {
    value: ConditionTypes.minusMP,
    title: ConditionTitles.minusMP,
  },
];
