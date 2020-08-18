import { THIS_ACTION, NEWS_ADD, STOCK_ADD, STOCK_START, STOCK_TABLE_ADD } from "./actionTypes";

export const thisAction = () => ({
  type: THIS_ACTION,
});

export const newsAdd = () => {
  return async (dispatch) => {
    const resp = await fetch(
      `https://newsapi.org/v2/top-headlines?category=business&country=us&apiKey=${process.env.REACT_APP_NEWS_KEY}`
    );
    const result = await resp.json();
    dispatch({
      type: NEWS_ADD,
      payload: result,
    });
  };
};

export const startStock = (name) => {
  return { type: STOCK_START,name };
};

export const stockAdd = (data) => {
  return {
    type: STOCK_ADD,
    payload: data,
  };
};

//table usa(world) stocks: Mikhail
export const addStockTable = () => {
  return async (dispatch) => {

   const stockSymbols = ["GOOG", "AAPL", "COKE", "XOM", "GE"]
   await stockSymbols.forEach(async(elem)=>{

     const resp = await fetch(
      `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${elem}&apikey=${process.env.REACT_APP_ALPHA_KEY_TWO}`
     );
     const r = await resp.json();
     dispatch({
       type: STOCK_TABLE_ADD,
       payload: r,
     });

   })
  };
};

