import { call, put, takeLatest } from 'redux-saga/effects';
import {
  NASA_PICTURE_REQUESTED,
  receiveNasaData,
} from '../../actions/nasaPicAction';
import fetchNasaData from '../../Api/fetchNasaData';

function* nasaSagaWorker() {
  try {
    const data = yield call(fetchNasaData);
    console.log(data);
    yield put(receiveNasaData(data));
  } catch (e) {
    yield console.log(e);
  }
}

function* nasaSagaWatcher() {
  yield takeLatest(NASA_PICTURE_REQUESTED, nasaSagaWorker);
}

export default nasaSagaWatcher;
