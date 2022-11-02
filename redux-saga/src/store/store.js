import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from './reducers';
import dogsSaga from './sagas/index';

const sagaMiddleWare = createSagaMiddleware();

const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleWare),
);

sagaMiddleWare.run(dogsSaga);

export default store;
