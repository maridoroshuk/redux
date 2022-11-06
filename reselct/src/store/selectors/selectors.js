import { createSelector } from '@reduxjs/toolkit';
import { getRandomInteger } from 'helpers/getRandomInteger';

export const breedSelector = (state) => {
  return state.breeds.breeds;
};

export const selectedBreedSelector = (state) => {
  return state.breeds.selectedBreed;
};

const imageSelector = (state) => {
  return state.dogImages.urls;
};

export const imageSuperSelector = createSelector(
  imageSelector,
  (images) => {
    return images[getRandomInteger(images.length)];
  },
);
