import { takeLatest, call, put } from 'redux-saga/effects';
import {
  getBreeds,
  setBreeds,
} from 'store/reducers/breedsSlice';
import { fetchBreedData } from '../api/fetchBreedsData';

function* breedsSagaWorker(action) {
  try {
    const data = yield call(fetchBreedData);
    yield put(setBreeds({data: Object.keys(data)}));
  } catch (e) {
    console.log(e);
  }
}

export function* breedsSagaWatcher() {
  yield takeLatest(getBreeds.type, breedsSagaWorker);
}
