import {THIS_ACTION} from "./actionTypes";

export const thisAction =(action)=>({
    type: THIS_ACTION,
    payload: action
})
