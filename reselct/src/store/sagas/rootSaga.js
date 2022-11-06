import { fork } from 'redux-saga/effects';
import { breedsSagaWatcher } from './handlers/breed';
import { imagesSagaWatcher } from './handlers/dogImages';

function* rootSaga() {
  yield fork(breedsSagaWatcher);
  yield fork(imagesSagaWatcher)
}

export default rootSaga;
