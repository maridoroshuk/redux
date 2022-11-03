export const NASA_PICTURE_REQUESTED = 'NASA_PICTURE_REQUESTED';
export const NASA_PICTURE_RECEIVED = 'NASA_PICTURE_RECEIVED';

export const requestNasaData = () => ({
  type: NASA_PICTURE_REQUESTED,
});

export const receiveNasaData = (data) => ({
  type: NASA_PICTURE_RECEIVED,
  payload: { data },
});
