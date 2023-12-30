interface IPointBar {
  title: string;
  emptyIcon: string;
  fullIcon: string;
  color: string;
}

class PointBar implements IPointBar {
  title: string;
  emptyIcon: string;
  fullIcon: string;
  color: string;

  constructor(
    title: string,
    emptyIcon: string,
    fullIcon: string,
    color: string
  ) {
    this.title = title;
    this.emptyIcon = emptyIcon;
    this.fullIcon = fullIcon;
    this.color = color;
  }
}

export const HPBar = new PointBar(
  "HP",
  "mdi-heart-outline",
  "mdi-heart",
  "error"
);
export const MPBar = new PointBar(
  "MP",
  "mdi-star-outline",
  "mdi-star",
  "primary"
);
export const EPBar = new PointBar(
  "EP",
  "mdi-flash-outline",
  "mdi-flash",
  "yellow-darken-1"
);
export const BasijBar = new PointBar(
  "Басидж",
  "mdi-adjust",
  "mdi-album",
  "primary"
);
export const InspirationBar = new PointBar(
  "Вдохновение",
  "mdi-music-note-outline",
  "mdi-music-note",
  "light-blue-lighten-1"
);

export const diceIcons = [
  "",
  "mdi-dice-d4",
  "mdi-dice-d6",
  "mdi-dice-d8",
  "mdi-dice-d10",
  "mdi-dice-d12",
  "mdi-dice-d20",
];
