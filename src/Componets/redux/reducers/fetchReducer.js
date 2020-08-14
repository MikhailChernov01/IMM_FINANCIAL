import { NEWS_ADD } from "../actionTypes";

export const fetch = (state = { news: [] }, action) => {
  switch (action.type) {
    case NEWS_ADD:
      return {
        ...state,
        news: [...state.news, action.payload],
      };
    default:
      return state;
  }
};
