import { ActionType } from './actionTypes.ts'

export type CounterState = {
  count: number
}

export type CounterAction = {
  type: ActionType.INCREMENT
} | {
  type: ActionType.DECREMENT
} | {
  type: ActionType.RESET
}