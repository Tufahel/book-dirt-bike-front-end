import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/configureStore';
import User from './components/User';
// import Motorcycle from './components/Motorcycle';
import Motorcycle from './components/motorcycle/Motorcycle';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Navigation from './components/Navigation/Navigation';

const App = () => (
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/nav" element={<Navigation />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/user" element={<User />} />
          <Route path="/motorcycle" element={<Motorcycle />} />
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
);

export default App;
