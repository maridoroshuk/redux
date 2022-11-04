import { fork } from 'redux-saga/effects';
import { dogSagaWatcher } from './handlers/dog';

function* rootSaga() {
  yield fork(dogSagaWatcher);
}

export default rootSaga;
