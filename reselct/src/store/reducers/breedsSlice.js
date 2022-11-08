import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  breeds: [],
  selectedBreed: null,
};

const breedsSlice = createSlice({
  name: 'breeds',
  initialState,
  reducers: {
    getBreeds: () => {},
    setBreeds: (state, action) => {
      return {
        ...state,
        breeds: action.payload.data,
        selectedBreed: action.payload.data[0],
      };
    },
    selectBreed: (state, action) => {
      return {
        ...state,
        selectedBreed: action.payload.breed,
      };
    },
  },
});

export const { getBreeds, setBreeds, selectBreed } =
  breedsSlice.actions;
export default breedsSlice.reducer;
