import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from './reducers';
import rootSaga from './sagas/rootSaga';

const sagaMiddleWare = createSagaMiddleware();

const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleWare),
);

sagaMiddleWare.run(rootSaga);

export default store;
