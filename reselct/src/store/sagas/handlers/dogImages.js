import { takeLatest, call, put } from 'redux-saga/effects';
import {
  getDogImage,
  setDogImage,
} from 'store/reducers/imageSlice';
import { fetchDogImage } from '../api/fetchDogImage';

function* imagesSagaWorker(action) {
  try {
    const data = yield call(fetchDogImage, action.payload);
    yield put(setDogImage(data));
  } catch (e) {
    console.log(e);
  }
}

export function* imagesSagaWatcher() {
  yield takeLatest(getDogImage.type, imagesSagaWorker);
}
