import axios from 'axios';

const URL = 'http://localhost:3000';

export const fetchUserData = async () => {
  const res = await fetch(`${URL}/api/users`)
    .then((response) => response.json());
  return res;
};

export const fetchMotorcycleData = async () => {
  const res = await fetch(`${URL}/api/motorcycles`)
    .then((response) => response.json());
  return res;
};

export const fetchRentalsData = async () => {
  const res = await fetch(`${URL}/api/rentals`)
    .then((response) => response.json());
  return res;
};

export const postSignupData = async (user) => {
  const res = await axios.post(`${URL}/users`, {
    user: {
      username: user.username,
      full_name: user.full_name,
      email: user.email,
      date_of_birth: user.date_of_birth,
      password: user.password,
      confirm_password: user.confirm_password,
    },
  });
  return res.data;
};

export const postSigninData = async (user) => {
  const res = await axios.post(`${URL}/users/sign_in`, {
    user: {
      username: user.username,
      password: user.password,
    },
  });
  console.log(res.data);
  return res;
};

const authToken = () => {
  const token = localStorage.getItem('token');
  if (token) {
    return token;
  }
  return {};
};

export const postNewMotorcycle = async (data, id) => {
  const newMotorcycle = {
    bike_name: data.bike_name,
    details: data.details,
    amount: data.amount,
    image: data.image,
    user_id: id,
  };

  const response = await axios.post(`${URL}/api/motorcycles`, newMotorcycle, {
    headers: {
      Authorization: `Bearer ${authToken()}`,
    },
  });

  return response.data;
};

export const deleteMotorcycleData = async (id) => {
  const res = await axios.delete(`${URL}/api/motorcycles/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${authToken()}`,
    },
  })
    .then((response) => response.json());
  return res;
};

export const addNewRental = async (data, id) => {
  const newRental = {
    bike_name: data.motorcycle_id,
    city: data.city,
    booked: data.book_date,
    return: data.return_date,
    user_id: id,
  };

  const response = await axios.post(`${URL}/api/rentals`, newRental, {
    headers: {
      Authorization: `Bearer ${authToken()}`,
    },
  });

  return response.data;
};
