import React from 'react';
import { NavLink } from 'react-router-dom';
import { BsStar, BsStarFill } from 'react-icons/bs';
import Rating from 'react-rating';

const Details = () => {
  const user = localStorage.getItem('user');
  const motorcycles = JSON.parse(localStorage.getItem('bikes'));
  const bikeId = parseInt(localStorage.getItem('bikeid'), 10);
  const filtered = motorcycles.filter((motorcycle) => motorcycle.id === bikeId);

  return (
    <>
      <div className="relative flex flex-col w-full h-screen">
        <div className=" ">
          {filtered.map((motorcycle) => (
            <div className="flex flex-col items-center lg:flex-row grow" key={motorcycle.id}>
              <div className="grow lg:w-2/5 px-4">
                <img
                  className="object-contain rounded-full aspect-square lg:h-screen lg:w-screen"
                  src={motorcycle.image}
                  alt={motorcycle.name}
                />
              </div>
              <div className="flex flex-col lg:w-72 lg:mr-20 py-10 px-10 lg:px-0">
                <h1 className="uppercase text-center lg:text-right font-bold text-2xl">
                  {' '}
                  {motorcycle.bike_name}
                </h1>
                <h2 className="uppercase text-center lg:text-right font-bold text-2xl">
                  {motorcycle.amount}
                  $ per hour
                </h2>
                <p className="mb-10 text-center lg:text-right">
                  {motorcycle.details}
                </p>
                <div className="flex flex-col items-center">
                  {
                user && (
                  <>
                    <NavLink className="no-underline flex items-center justify-center gap-3 text-2xl font-extrabold py-2 px-4 rounded-full text-primary d-link" to="/addrental"> Rent</NavLink>
                  </>
                )
                }
                  {
              (user === null) && (
                <>
                  <NavLink to="/login" className="no-underline flex items-center justify-center text-2xl font-extrabold py-2 px-4 rounded-full text-primary d-link">Login To Rent</NavLink>
                </>
              )
              }
                  <Rating
                    className="text-2xl font-extrabold py-2 px-4"
                    step={1}
                    initialRating={4}
                    readonly
                    stop={5}
                    fractions={2}
                    emptySymbol={<BsStar color="#F4C362" />}
                    fullSymbol={<BsStarFill color="#F4C362" />}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Details;
