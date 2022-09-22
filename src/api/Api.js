const fetchUserData = async () => {
  const res = await fetch('http://localhost:3000/api/users')
    .then((response) => response.json());
  return res;
};

export default fetchUserData;
