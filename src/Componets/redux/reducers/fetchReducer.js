import { NEWS_ADD, STOCK_ADD } from "../actionTypes";

export const fetch = (state = { news: [], stock:[] }, action) => {
  switch (action.type) {
    case NEWS_ADD:
      return {
        ...state,
        news: [...state.news, action.payload],
      };
    case STOCK_ADD:
      return {
        ...state,
        stock: [action.payload],
      };
    default:
      return state;
  }
};
