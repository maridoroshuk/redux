export const DOG_FETCH_REQUESTED = 'DOG_FETCH_REQUESTED';
export const DOG_FETCH_RECEIVED = 'DOG_FETCH_RECEIVED';

export const requestData = () => ({
  type: DOG_FETCH_REQUESTED,
});

export const receiveData = (data) => ({
  type: DOG_FETCH_RECEIVED,
  payload: { data },
});
