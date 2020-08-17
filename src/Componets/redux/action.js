import { THIS_ACTION, NEWS_ADD, STOCK_ADD, STOCK_START } from "./actionTypes";

export const thisAction = () => ({
  type: THIS_ACTION,
});

export const newsAdd = () => {
  return async (dispatch) => {
    console.log(process.env);
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
