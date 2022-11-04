import { combineReducers } from 'redux';
import catReducer from './reducers/cat/catReducer';

const rootReducer = combineReducers({
  cat: catReducer,
});

export default rootReducer;
