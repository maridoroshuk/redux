import { combineReducers } from 'redux';
import dataReducer from './data/dataReducer';

const reducer = combineReducers({
  dogs: dataReducer,
});
export default reducer;
