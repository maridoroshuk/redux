import { DOG_FETCH_RECEIVED } from '../../actions/dogAction';

// eslint-disable-next-line default-param-last
export default (state = '', { type, payload }) => {
  switch (type) {
    case DOG_FETCH_RECEIVED:
      return payload.data;
    default:
      return state;
  }
};
