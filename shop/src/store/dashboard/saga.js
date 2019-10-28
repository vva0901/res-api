import actions from './action';
import { all, fork, put, takeLatest } from 'redux-saga/effects';
import { login } from '../../services/admin';

export function* getProductSaga() {
    yield takeLatest(actions.GET_PRODUCT_REQUEST, function* (data) {
        try {
            const res = yield login(data.params);
            if (res.data.status === 200) {
                yield localStorage.setItem('logged', 'true');
                yield localStorage.setItem('token', res.data.data);
                yield put({ type: actions.GET_PRODUCT_SUCCESS, data: res.data.data });
                yield data.success();
            } else {
                yield data.fail(res.data.message);
            }
        } catch (error) {
            yield data.fail(error);
        }
    });
}

export default function* rootSaga() {
    yield all([fork(getProductSaga)]);
}
