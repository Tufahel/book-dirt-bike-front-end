import axios from 'axios';

const fetchUserData = async () => {
  await axios.get('http://localhost:3000/api/users')
    .then((response) => {
      console.log(response);
    });
};

export default fetchUserData;
