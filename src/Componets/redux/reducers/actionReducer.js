import { THIS_ACTION } from "../actionTypes";

export const action = (state = {magic: true}, action) =>{
  switch (action.type) {
    case THIS_ACTION:
      return {
        ...state,
        magic: action.payload,
      }
     default:
      return state
  }
}
