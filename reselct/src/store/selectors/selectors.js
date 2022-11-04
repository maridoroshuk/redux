import { createSelector } from "@reduxjs/toolkit";

export const breedSelector = (state) => {
  return state.breeds.breeds;
};

export const selectedBreedSelector = (state) => {
  return state.breeds.selectedBreed;
};

// export const breedReselect = createSelector(breedSelector, )
