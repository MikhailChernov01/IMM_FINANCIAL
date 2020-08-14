import { THIS_ACTION, NEWS_ADD } from "./actionTypes";

export const thisAction = () => ({
  type: THIS_ACTION,
});

export const newsAdd = () => {
  return async (dispatch) => {
    const resp = await fetch(`https://newsapi.org/v2/top-headlines?category=business&country=us&apiKey=${process.env.REACT_APP_NEWS_KEY}`);
    const result = await resp.json();
    dispatch({
      type: NEWS_ADD,
      payload: result,
    });
  };
};
