import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  urls: [],
};

const imageSlice = createSlice({
  name: 'dog image',
  initialState: initialState,
  reducers: {
    getDogImage: () => {},
    setDogImage: (state, action) => {
      return { ...state, urls: action.payload };
    },
  },
});

export const { getDogImage, setDogImage } =
  imageSlice.actions;

export default imageSlice.reducer;
