/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getBreeds,
  selectBreed,
} from 'store/reducers/breedsSlice';
import { breedSelector, selectedBreedSelector } from 'store/selectors/selectors';
import BreedOptions from '../BreedOptions/BreedOptions';

function Home() {
  const dispatch = useDispatch();
  const breeds = useSelector(breedSelector);
  const selectedBreed = useSelector(selectedBreedSelector);

  console.log(selectedBreed);
  const handleBreedSelect = (breed) => {
    dispatch(selectBreed({breed}));
  };

  const handleGetButtonClick = () => {};

  useEffect(() => {
    dispatch(getBreeds());
  }, []);

  return (
    <div className="container">
      <div>
        <BreedOptions
          breeds={breeds}
          onBreedSelect={(breed) =>
            handleBreedSelect(breed)
          }
        />
        <button
          type="button"
          onClick={handleGetButtonClick}
        >
          Get a dog
        </button>
      </div>
      <img alt="" />
    </div>
  );
}

export default Home;
