import React from 'react';
import './Home.css';
import Navigation from './Navigation/Navigation';
import Motorcycle from './motorcycle/Motorcycle';

function Home() {
  return (
    <>
      <div className="">
        <div className="">
          <Navigation />
        </div>
        <div className="homepage">
          <h1 className="text">Welcome to Dirty Bikes</h1>
          <p className="text">We are the best bike rental company in the world</p>
          <Motorcycle />
        </div>
      </div>
    </>
  );
}

export default Home;
