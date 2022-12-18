import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './Motorcycles.css';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { getMotorcycles, deleteMotorcycle } from '../../redux/actions/Motorcycle';
import Motorcycle from './Motorcycle';
import DirectionalButton from './button/DirectionalButton';

const Motorcycles = () => {
  const dispatch = useDispatch();
  const motorcycles = useSelector((state) => state.MotorcycleReducer);
  const navigate = useNavigate();
  const user = localStorage.getItem('user');
  useEffect(() => {
    dispatch(getMotorcycles());
  }, []);

  const handleDelete = (id) => {
    dispatch(deleteMotorcycle(id));
    window.location.reload(true);
  };

  const responsive = {
    0: { items: 1 },
    640: { items: 2 },
    768: { items: 3 },
    1024: { items: 4 },
  };

  const items = motorcycles.bikes?.map((motorcycle) => (
    <div key={motorcycle.id} className="p-4">
      <div className="flex flex-wrap gap-10">
        <img className="rounded-full w-60 h-60" src={motorcycle.image} alt="bike" />
        <div className="flex flex-col">
          <h2 className="uppercase">{motorcycle.name}</h2>
          <p className="">
            Details: &nbsp;
            {motorcycle.details}
          </p>
          <p className="">
            Rent Price: &nbsp;
            {motorcycle.price}
          </p>
          <div className="flex gap-4">
            {user && (
            <button className="delete text-red font-bold p-4 rounded-full" type="button" onClick={() => handleDelete(motorcycle.bike_id)}>DELETE</button>
            )}
            <Motorcycle
              key={motorcycle.bike_id}
              id={motorcycle.bike_id}
            />
          </div>
        </div>
      </div>
    </div>
  ));

  return (
    <>
      <div className="h-screen flex flex-col items-center justify-center p-5">
        <div className="flex flex-col">
          <div className="flex flex-col">
            <h1 className="flex flex-col justify-center items-center w-full text-4xl font-bold">Welcome to Dirt Bikes</h1>
            <p className="flex flex-col justify-center items-center w-full text-2xl">We are the best bike rental company in the world</p>
          </div>
        </div>

        <AliceCarousel
          mouseTracking
          disableDotsControls
          renderPrevButton={({ isDisabled }) => <DirectionalButton twClasses="absolute top-28 left-0" left disabled={isDisabled} />}
          renderNextButton={({ isDisabled }) => <DirectionalButton twClasses="absolute top-28 right-0" disabled={isDisabled} />}
          responsive={responsive}
          items={items}
          className="bg-red-500"
        />

        {
        user && (
          <button
            className="addbike text-white bg-primary font-bold py-2 px-8 rounded-full"
            type="button"
            onClick={() => navigate('/addmotorcycle')}
          >
            Add Bike
          </button>
        )

      }
      </div>

    </>
  );
};

export default Motorcycles;
