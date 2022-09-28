import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import store from './redux/configureStore';
// import User from './components/User';
// import Motorcycle from './components/Motorcycle';
import Motorcycles from './components/motorcycle/Motorcycles';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Navigation from './components/Navigation/Navigation';
import AddMotorcycle from './components/motorcycle/AddMotorcycle';
import Rentals from './components/rental/Rentals';
// import Home from './components/Home';
import AddRental from './components/rental/AddRentals';
import Details from './components/motorcycle/Details/Details';

const App = () => (
  <Router>
    <Routes>
      <Route path="/nav" element={<Navigation />} />
      <Route path="/details" element={<Details />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      {/* <Route path="/" element={<User />} /> */}
      <Route path="/rentals" element={<Rentals />} />
      {/* <Route path="/" element={<Home />} /> */}
      <Route path="/" element={<Motorcycles />} />
      <Route path="/addmotorcycle" element={<AddMotorcycle />} />
      <Route path="/addrental" element={<AddRental />} />
    </Routes>
  </Router>
);

export default App;
