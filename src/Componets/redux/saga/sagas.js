import { put, takeLatest, all, call } from "redux-saga/effects";
import { stockAdd } from "../action";
import { STOCK_START } from "../actionTypes";

const fetchOnStock = async (symbol) => {
  console.log(process.env);
  const response = await fetch(
    `https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=${symbol}&apikey=${process.env.REACT_APP_ALPHA_KEY_TWO}`
  );
  const resultResp = await response.json();
  return resultResp;
};

function* fetchStock(action) {
  console.log(action.name);
  const data = yield call(fetchOnStock, action.name)
  yield put(stockAdd(data))
}


function* actionWatcher() {
  yield takeLatest(STOCK_START, fetchStock)
}

export default function* rootSaga() {
  yield all([
  actionWatcher(),
  ]);
}
