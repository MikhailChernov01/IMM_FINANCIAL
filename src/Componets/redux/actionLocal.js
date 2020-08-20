import {
  ADD_ACCOUNT,
  SHOW_ACCOUNT,
  ADD_PURCHASE,
  DELETE_PURCHASE,
  } from "./actionTypes";

//add ACCOUNT in  club
export const accountAdd = () => {
  return async (dispatch) => {
    const resp = await fetch("/", {
      method: "put",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        user: "ivan",
      }),
    });
    const result = await resp.json();
    dispatch({
      type: ADD_ACCOUNT,
      payload: result,
    });
  };
};

//show account in club
export const accountShow = () => {
  return async (dispatch) => {
    const resp = await fetch("/show");
    const result = await resp.json();
    dispatch({
      type: SHOW_ACCOUNT,
      payload: result,
    });
  };
};

//delete account
export const accountDelete = (id) => {
  return async (dispatch) => {
    const resp = await fetch("/", {
      method: "delete",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        id,
      }),
    });
    const result = await resp.json();
    dispatch({
      type: SHOW_ACCOUNT,
      payload: result,
    });
  };
};

//edit account
export const accountEdit = (id) => {
  return async (dispatch) => {
    const resp = await fetch("/show", {
      method: "put",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        id,
      }),
    });
    const result = await resp.json();
    console.log(result);
    dispatch({
      type: SHOW_ACCOUNT,
      payload: result,
    });
  };
};


//add purchase

export const purchAdd = (obj) => {
  return async (dispatch) => {
    const {stock, count} =obj
    const resp = await fetch("/purchase", {
      method: "put",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        stock,
        count
      }),
    });
    const result = await resp.json();
    // console.log(result);
    dispatch({
      type: ADD_PURCHASE,
      payload: result,
    });
  };
};


//delete purchase

export const purchDelete = (id) => {
  return async (dispatch) => {
    const resp = await fetch("/purchase", {
      method: "delete",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        id,
      }),
    });
    const result = await resp.json();
    dispatch({
      type: DELETE_PURCHASE,
      payload: result,
    });
  };
};
