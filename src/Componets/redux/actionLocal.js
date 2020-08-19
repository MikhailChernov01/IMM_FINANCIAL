import { ADD_ACCOUNT, SHOW_ACCOUNT, DELETE_ACCOUNT } from "./actionTypes";

//add ACCOUNT in  club
export const accountAdd = () => {
  return async (dispatch) => {
     const resp = await fetch('/', {
      method: 'put',
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        user: 'ivan'
    })
    });
    const result = await resp.json();
    dispatch({
      type: ADD_ACCOUNT,
      payload: result,
    });
  };
};

//show account in club
 export const accountShow = ()=> {
   return async (dispatch)=>{
    const resp = await fetch('/show')
    const result = await resp.json();
    dispatch({
      type: SHOW_ACCOUNT,
      payload: result,
    })
   }
 }

//delete account
 export const accountDelete = (id) => {
  return async (dispatch) => {
     const resp = await fetch('/', {
      method: 'delete',
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        id
    })
    });
    const result = await resp.json();
    dispatch({
      type: DELETE_ACCOUNT,
      payload: result,
    });
  };
};
