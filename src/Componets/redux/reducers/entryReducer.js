import {
  ADD_ACCOUNT,
  SHOW_ACCOUNT,
  DELETE_ACCOUNT,
  EDIT_ACCOUNT,
  DELETE_PURCHASE,
  ADD_PURCHASE,
} from "../actionTypes";

// SERVER reducer
export const entry = (state = { accouts: [], purchase: [] }, action) => {
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
    case EDIT_ACCOUNT:
      return {
        ...state,
        accounts: [...action.payload],
      };
    case SHOW_ACCOUNT:
      return {
        ...state,
        accounts: [...action.payload],
      };
    case ADD_PURCHASE:
      return {
        ...state,
        purchase: [...action.payload],
      };
    case DELETE_PURCHASE:
      return {
        ...state,
        purchase: [...action.payload],
      };
    default:
      return state;
  }
};
