import { ADD_ACCOUNT, SHOW_ACCOUNT, DELETE_ACCOUNT } from "../actionTypes";

// SERVER reducer
export const entry = (state = { accouts: [] }, action) => {
  switch (action.type) {
    case ADD_ACCOUNT:
      return {
        ...state,
        accounts: [...state.accounts, action.payload],
      };
    case DELETE_ACCOUNT:
      return {
        ...state,
        accounts: [...action.payload],
      };
      case SHOW_ACCOUNT:
        return {
          ...state,
          accounts: action.payload
        }
    default:
      return state
  }
};
