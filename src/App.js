import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import store from './redux/configureStore';
// import User from './components/User';
// import Motorcycle from './components/Motorcycle';
import Motorcycle from './components/motorcycle/Motorcycle';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Navigation from './components/Navigation/Navigation';
import AddMotorcycle from './components/motorcycle/AddMotorcycle';
import Rental from './components/rental/Rentals';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Navigation />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      {/* <Route path="/" element={<User />} /> */}
      <Route path="/motorcycle" element={<Motorcycle />} />
      <Route path="/rental" element={<Rental />} />
      <Route path="/addmotorcycle" element={<AddMotorcycle />} />
    </Routes>
  </Router>
);

export default App;
