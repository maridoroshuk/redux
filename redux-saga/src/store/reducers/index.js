import { combineReducers } from 'redux';
import dataReducer from './dog/dogReducer';
import nasaReducer from './nasa/nasaReducer';

const reducer = combineReducers({
  dogs: dataReducer,
  nasa: nasaReducer,
});
export default reducer;
