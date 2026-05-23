import { IOption } from "@/helpers/types"
import { TLevel, TNodesize } from "./types"

export const nodeSizeOptions: IOption<TNodesize>[] = [
  {
    title: "6",
    value: 6,
  },
  {
    title: "12",
    value: 12,
  },
  {
    title: "20",
    value: 20,
  },
]

export const levels: TLevel[] = [0, 1, 2, 3, 4, 5, 6]
export const levelOptions: IOption<TLevel>[] = levels.map((level) => ({
  title: level.toString(),
  value: level,
}))

export const getRndNumber = (max: number) =>
  max > 0 ? Math.floor(Math.random() * max) + 1 : 1
