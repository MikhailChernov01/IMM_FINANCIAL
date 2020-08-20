import { NEWS_ADD, STOCK_ADD, STOCK_TABLE_ADD, FX_ADD_USD, FX_ADD_EUR, ADD_COVID_19, RECEIVE_COVID_19 } from "../actionTypes";

export const fetch = (state = { news: [], stock: [], indicators:[], usd:[], euro:[], covid:[] }, action) => {
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
    case STOCK_TABLE_ADD:
      return {
        ...state,
        indicators: [...state.indicators, action.payload],
      };
      case FX_ADD_USD:
        return {
          ...state,
          usd: [...state.usd, action.payload],
      };
      case FX_ADD_EUR:
      return {
          ...state,
          euro: [...state.euro, action.payload],
      };

      case ADD_COVID_19:
        return {
          ...state,
          covid: action.payload,
        };
      case RECEIVE_COVID_19:
        return {
          ...state,
          covid: action.payload,
        };
  
    default:
      return state;
  }
};
