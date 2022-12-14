/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { requestNasaData } from '../../store/actions/nasaPicAction';
import { requestData } from '../../store/actions/dogAction';

function Home() {
  const data = useSelector((state) => state.dogs);
  const dispatch = useDispatch();

  console.log(data);

  const handleClick = () => {
    dispatch(requestData());
    dispatch(requestNasaData());
  };

  return (
    <div className="container">
      <div>
        <button type="button" onClick={handleClick}>
          Get a random dog
        </button>
      </div>
      <img src={data} alt="" />
    </div>
  );
}

export default Home;
