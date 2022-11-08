/* eslint-disable react/prop-types */
import DogImage from 'components/DogImage/DogImage';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getBreeds,
  selectBreed,
} from 'store/reducers/breedsSlice';
import { getDogImage } from 'store/reducers/imageSlice';
import {
  breedSelector,
  imageSuperSelector,
  selectedBreedSelector,
} from 'store/selectors/selectors';
import BreedOptions from '../BreedOptions/BreedOptions';

function Home() {
  const dispatch = useDispatch();
  const breeds = useSelector(breedSelector);
  const selectedBreed = useSelector(selectedBreedSelector);
  const imageUrl = useSelector(imageSuperSelector);

  const handleBreedSelect = (breed) => {
    dispatch(selectBreed({ breed }));
  };

  useEffect(() => {
    dispatch(getBreeds());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getDogImage(selectedBreed))
  }, [dispatch, selectedBreed])

  return (
    <div className="container">
      <h1>Get a random dog image by breed</h1>
        <BreedOptions
          breeds={breeds}
          onBreedSelect={(breed) =>
            handleBreedSelect(breed)
          }
        />
        {imageUrl && <DogImage source={imageUrl} breed={selectedBreed} />}

    </div>
  );
}

export default Home;
