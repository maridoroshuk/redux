import { CAT_DATA_RECEIVED } from 'store/actions/catActionCreator';

const catReducer = (state = '', action) => {
  switch (action.type) {
    case CAT_DATA_RECEIVED:
      return action.payload.url;
    default:
      return state;
  }
};

export default catReducer;
