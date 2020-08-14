import { THIS_ACTION } from "../actionTypes";

export const action = (state = {magic: true}, action) =>{
  switch (action.type) {
    case THIS_ACTION:
      return {
        ...state,
        magic: !state.magic,
      }
     default:
      return state
  }
}
