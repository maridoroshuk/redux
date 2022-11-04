/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchCatData from 'store/api/fetchCatData';

function Home() {
  const data = useSelector((state) => state.cat);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(fetchCatData())
  };

  return (
    <div className="container">
      <div>
        <button type="button" onClick={handleClick}>
          Get a random cat
        </button>
      </div>
      <img src={data} alt="" />
    </div>
  );
}

export default Home;
