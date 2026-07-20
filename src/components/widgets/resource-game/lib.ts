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

export const getRndNumber = (max: number) => {
  if (max <= 0) {
    return 1
  }

  const array = new Uint8Array(1)
  const limit = 256 - (256 % max)

  while (true) {
    crypto.getRandomValues(array)
    const val = array[0]

    if (val < limit) {
      return (val % max) + 1
    }
  }
}
