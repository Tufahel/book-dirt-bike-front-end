import React from 'react';
import './Details.css';
import { NavLink } from 'react-router-dom';

const Details = () => {
  const motorcycles = JSON.parse(localStorage.getItem('bikes'));
  const bikeId = parseInt(localStorage.getItem('bikeid'), 10);
  const filtered = motorcycles.filter((motorcycle) => motorcycle.id === bikeId);
  console.log('all bikes: ', motorcycles);
  console.log('filtered: ', filtered);
  console.log('only id: ', bikeId);

  return (
    <div>
      {filtered.map((motorcycle) => (
        <div key={motorcycle.id}>
          <h2>
            name:
            {' '}
            {motorcycle.bike_name}
          </h2>
          <h2>
            price:
            {' '}
            {motorcycle.amount}
          </h2>
          <h2>
            details:
            {' '}
            {motorcycle.details}
          </h2>
          <hr />
          <NavLink to="/addrental"> Rent</NavLink>
        </div>
      ))}
    </div>
  );
};
// function Details() {
//   const motorcycles = useSelector((state) => state.MotorcyclesReducer);
//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(getMotorcycles());
//   }, []);
//   return (
//     <div className="content">
//       <h1>Details</h1>
//       {motorcycles.value?.map((motorcycle) => (
//         <div key={motorcycle.id}>
//           <h3>{motorcycle.name}</h3>
//           <p>{motorcycle.details}</p>
//           <p>{motorcycle.price}</p>
//         </div>
//       ))}
//       {/* {motorcycles.value?.map((motorcycle) => (
//         <div key={motorcycle.id} className="bike__container">
//           <div className="bike__image">
//             <img src={motorcycle.image} alt="bike" />
//           </div>
//           <div className="bike__details">
//             <h3>{motorcycle.name}</h3>
//             <p>{motorcycle.details}</p>
//             <p>{motorcycle.price}</p>
//           </div>
//         </div>
//       ))} */}
//     </div>
//   );
// }

export default Details;
