import React from 'react';
import './Home.css';
import Navigation from './Navigation/Navigation';
import Motorcycles from './motorcycle/Motorcycles';

function Home() {
  return (
    <>
      <Navigation />
      <div className="">
        <div className="main">
          <div className="homepage">
            <h1 className="text">Welcome to Dirty Bikes</h1>
            <p className="text">We are the best bike rental company in the world</p>
          </div>
          <Motorcycles />
        </div>
      </div>
    </>
  );
}

export default Home;
