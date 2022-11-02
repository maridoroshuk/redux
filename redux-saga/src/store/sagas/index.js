import { call, put, takeLatest } from 'redux-saga/effects';
import fetchData from '../Api/fetchData';
import {
  receiveData,
  DOG_FETCH_REQUESTED,
} from '../actions/dogAction';

// worker Saga: will be fired on DOG_FETCH_REQUESTED actions
function* fetchDogData() {
  try {
    const data = yield call(fetchData);
    yield put(receiveData(data));
  } catch (e) {
    yield put({
      type: ' DOG_FETCH_FAILED',
      message: e.message,
    });
  }
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/

// function* dogsSaga() {
//   yield takeEvery(DOG_FETCH_REQUESTED, fetchDogData);
// }

/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
function* dogsSaga() {
  yield takeLatest(DOG_FETCH_REQUESTED, fetchDogData);
}

export default dogsSaga;
