import React from 'react';
import Navigation from './Navigation/Navigation';
import Motorcycles from './motorcycle/Motorcycles';

function Home() {
  return (
    <>
      <Navigation />
      <div className="flex flex-col">
        <div className="flex flex-col">
          <div className="flex flex-col">
            <h1 className="flex flex-col justify-center items-center w-full text-4xl font-bold">Welcome to Dirty Bikes</h1>
            <p className="flex flex-col justify-center items-center w-full text-2xl">We are the best bike rental company in the world</p>
          </div>
          <Motorcycles />
        </div>
      </div>
    </>
  );
}

export default Home;
