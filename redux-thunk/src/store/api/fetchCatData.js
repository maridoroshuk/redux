import {
  catDataRequested,
  catDataReceived,
} from 'store/actions/catActionCreator';

function fetchCatData() {
  return async (dispatch) => {
    try {
      const res = await fetch(
        'https://api.thecatapi.com/v1/images/search',
      );
      const data = await res.json();
      dispatch(catDataReceived(...data));
    } catch (e) {
      console.log(e);
    }
  };
}

export default fetchCatData;
