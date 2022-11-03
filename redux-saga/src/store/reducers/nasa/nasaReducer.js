import { NASA_PICTURE_RECEIVED } from '../../actions/nasaPicAction';

// eslint-disable-next-line default-param-last
export default (state = '', { type, payload }) => {
  switch (type) {
    case NASA_PICTURE_RECEIVED:
      return payload.data;
    default:
      return state;
  }
};
