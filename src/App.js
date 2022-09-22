import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/configureStore';
import User from './components/User';

const App = () => (
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<User />} />
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
);

export default App;
