export const CAT_DATA_RECEIVED = 'CAT_DATA_RECEIVED';

export const catDataReceived = (data) => {
  return {
    type: CAT_DATA_RECEIVED,
    payload: {
      url: data.url,
    },
  };
};
