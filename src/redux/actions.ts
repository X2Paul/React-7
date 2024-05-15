import { ActionType } from './actionTypes.ts'
import { CounterAction } from './types.ts'

export const increment = (): CounterAction => ({
  type: ActionType.INCREMENT })

export const decrement = (): CounterAction => ({
  type: ActionType.DECREMENT })

export const reset = (): CounterAction => ({
  type: ActionType.RESET })