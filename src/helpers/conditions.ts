import { ConditionTypes, ICondition } from "./types";

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
  create(type: ConditionTypes, value: number) {
    switch (type) {
      case ConditionTypes.plusHP: {
        return new Condition({
          title: "Увеличение здоровья",
          description: "Увеличивает максимальное кол-во здоровья",
          icon: "mdi-heart",
          color: "red",
          type: ConditionTypes.plusHP,
          value: value,
        });
      }
      case ConditionTypes.minusHP: {
        return new Condition({
          title: "Уменьшение здоровья",
          description: "Уменьшает максимальное кол-во здоровья",
          icon: "mdi-heart-broken",
          color: "black",
          type: ConditionTypes.minusHP,
          value: value,
        });
      }
      case ConditionTypes.plusMP: {
        return new Condition({
          title: "Увеличение маны",
          description: "Увеличивает максимальное кол-во маны",
          icon: "mdi-star-plus",
          color: "primary",
          type: ConditionTypes.plusMP,
          value: value,
        });
      }
      case ConditionTypes.minusMP: {
        return new Condition({
          title: "Уменьшение маны",
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

// class PlusHP extends Condition {
//   constructor(value: number) {
//     super({
//       title: "Увеличение здоровья",
//       description: "Увеличивает максимальное кол-во здоровья",
//       icon: "",
//       type: ConditionTypes.plusHP,
//       value: value,
//     });
//   }
// }

// class MinusHP extends Condition {
//   constructor(value: number) {
// super({
//   title: "Уменьшение здоровья",
//   description: "Уменьшает максимальное кол-во здоровья",
//   icon: "",
//   type: ConditionTypes.minusHP,
//   value: value,
// });
//   }
// }

// this.title = "Увеличение здоровья";
// this.description = "Увеличивает максимальное кол-во здоровья";
