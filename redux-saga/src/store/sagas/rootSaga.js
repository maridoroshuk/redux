import { fork } from 'redux-saga/effects';
import dogsSagaWatcher from './dogSaga/dogSaga';
import nasaSagaWatcher from './nasaSaga/nasaSaga';

function* rootSaga() {
  yield fork(dogsSagaWatcher);
  yield fork(nasaSagaWatcher);
}

export default rootSaga;
