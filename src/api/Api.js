export const fetchUserData = async () => {
  const res = await fetch('http://localhost:3000/api/users')
    .then((response) => response.json());
  return res;
};

export const fetchMotorcycleData = async () => {
  const res = await fetch('http://localhost:3000/api/motorcycles')
    .then((response) => response.json());
  return res;
};