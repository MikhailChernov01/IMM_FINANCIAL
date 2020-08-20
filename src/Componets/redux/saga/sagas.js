import { put, takeLatest, all, call } from "redux-saga/effects";
import { stockAdd, receiveDataFromFetch } from "../action";
import { STOCK_START, START_FETCH_COVID_19 } from "../actionTypes";

const fetchOnStock = async (symbol) => {
  const response = await fetch(
    `https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=${symbol}&apikey=${process.env.REACT_APP_ALPHA_KEY_TWO}`
  );
  const resultResp = await response.json();
  return [resultResp];
};

const fetchCOVID_19 = async () => {
  const resp = await fetch(
    "https://api.apify.com/v2/key-value-stores/tVaYRsPHLjNdNBu7S/records/LATEST?disableRedirect=true"
  );
  const r = await resp.json();
   return r;
};

function* fetchData() {
  const data = yield call(fetchCOVID_19);
  yield put(receiveDataFromFetch(data));
}

function* fetchStock(action) {
  const data = yield call(fetchOnStock, action.name);
  yield put(stockAdd(data));
}

function* actionWatcher() {
  yield takeLatest(START_FETCH_COVID_19, fetchData);
  yield takeLatest(STOCK_START, fetchStock);
}

export default function* rootSaga() {
  yield all([actionWatcher()]);
}
