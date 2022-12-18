import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Motorcycles from './components/motorcycle/Motorcycles';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Navigation from './components/Navigation/Navigation';
import AddMotorcycle from './components/motorcycle/AddMotorcycle';
import Rentals from './components/rental/Rentals';
import AddRental from './components/rental/AddRentals';
import Details from './components/motorcycle/Details/Details';

const App = () => (
  <div className="h-screen text-gray-700 flex relative">
    <Router>
      <Navigation />
      <main className="h-screen w-full overflow-y-auto relative">
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
      </main>
    </Router>
    <aside>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </aside>
  </div>
);

export default App;
