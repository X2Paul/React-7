import { ActionType } from './actionTypes'
import { CounterAction, CounterState } from './types.ts'

const initialState: CounterState = {
  count: 0
}

const counterReducer = (state: CounterState = initialState, action: CounterAction): CounterState => {
  switch (action.type) {
    case ActionType.INCREMENT:
      return {
        count: state.count + 1
      }
    case ActionType.DECREMENT:
      return {
        count: state.count - 1
      }
    case ActionType.RESET:
      return {
        count: 0
      }
    default:
      return state
  }
}

export default counterReducer