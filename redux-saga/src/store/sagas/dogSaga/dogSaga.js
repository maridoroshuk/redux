import { call, put, takeLatest } from 'redux-saga/effects';
import fetchDogData from '../../Api/fetchDogData';
import {
  receiveData,
  DOG_FETCH_REQUESTED,
} from '../../actions/dogAction';

// worker Saga: will be fired on DOG_FETCH_REQUESTED actions
function* fetchDogDataWorker() {
  try {
    const data = yield call(fetchDogData);
    yield put(receiveData(data));
  } catch (e) {
    yield console.log(e);
  }
}

function* dogsSagaWatcher() {
  yield takeLatest(DOG_FETCH_REQUESTED, fetchDogDataWorker);
}

export default dogsSagaWatcher;
