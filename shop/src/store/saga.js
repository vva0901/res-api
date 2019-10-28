import { all } from 'redux-saga/effects';
import productSaga from './dashboard/saga';


export default function* rootSaga() {
  yield all([productSaga()]);
}
