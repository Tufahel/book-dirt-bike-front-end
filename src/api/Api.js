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
