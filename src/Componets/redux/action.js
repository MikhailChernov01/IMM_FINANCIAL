import { THIS_ACTION, NEWS_ADD, STOCK_ADD, STOCK_START, STOCK_TABLE_ADD, FX_ADD_USD, FX_ADD_EUR } from "./actionTypes";

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

//table usa(world) stocks
export const addStockTable = () => {
  return async (dispatch) => {

   const stockSymbols = ["GOOG", "AAPL", "COKE", "XOM"]
   await stockSymbols.forEach(async(elem)=>{

     const resp = await fetch(
      `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${elem}&apikey=${process.env.REACT_APP_ALPHA_KEY_THREE}`
     );
     const r = await resp.json();
     dispatch({
       type: STOCK_TABLE_ADD,
       payload: r,
     });

   })
  };
};

//rub-usd in line
export const addCurrency = () => {
  return async (dispatch) => {  

     const resp = await fetch(
      `https://www.alphavantage.co/query?function=FX_DAILY&from_symbol=USD&to_symbol=RUB&apikey=${process.env.REACT_APP_ALPHA_KEY_FOUR}`
     );
     const r = await resp.json();
     dispatch({
       type: FX_ADD_USD,
       payload: r,
     });   
  };
};

//rub-eur in line
export const addEuro = () => {
  return async (dispatch) => {  

     const resp = await fetch(
      `https://www.alphavantage.co/query?function=FX_DAILY&from_symbol=EUR&to_symbol=RUB&apikey=${process.env.REACT_APP_ALPHA_KEY_ONE}`
     );
     const r = await resp.json();
     dispatch({
       type: FX_ADD_EUR,
       payload: r,
     });   
  };
};
