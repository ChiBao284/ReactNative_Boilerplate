import { dogApi } from '@store/api/dogApi';
import { getDogError, getDogRequest, getDogSuccess } from '@store/reducers/dogSlice';
import { put, takeLatest } from 'redux-saga/effects'
import { NetWorkService } from '../../lib/networking'
function* dogSaga() {
    try {
        const { data, status } = yield dogApi()

        if (data) {
            yield put(getDogSuccess(data))
        }
        yield put(getDogError(data))

    } catch (error: any) {
        yield put(getDogError(error))
    }
}

export function* watchDog() {
    yield takeLatest(getDogRequest().type, dogSaga)
}