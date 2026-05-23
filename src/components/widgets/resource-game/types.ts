export type TNodesize = 6 | 12 | 20
export type TLevel = 0 | 1 | 2 | 3 | 4 | 5 | 6

export interface IConfig {
  nodeSize: TNodesize
  level: TLevel
  withFriend: boolean
  friendLevel: TLevel
}
