import React from 'react';
import { NavLink } from 'react-router-dom';
import Navigation from '../../Navigation/Navigation';

const Details = () => {
  const motorcycles = JSON.parse(localStorage.getItem('bikes'));
  const bikeId = parseInt(localStorage.getItem('bikeid'), 10);
  const filtered = motorcycles.filter((motorcycle) => motorcycle.id === bikeId);
  console.log('all bikes: ', motorcycles);
  console.log('filtered: ', filtered);
  console.log('only id: ', bikeId);

  return (
    <>
      <Navigation />
      <div className="flex flex-col justify-center items-center p-4">
        {filtered.map((motorcycle) => (
          <div className="" key={motorcycle.id}>
            <img
              className="rounded-full w-96 h-96"
              src={motorcycle.image}
              alt={motorcycle.name}
            />
            <div className="p-8">
              <h2 className="uppercase">
                Name:
                {' '}
                {motorcycle.bike_name}
              </h2>
              <h2 className="uppercase">
                price:
                {' '}
                {motorcycle.amount}
              </h2>
              <h2>
                DETAILS:
                {' '}
                {motorcycle.details}
              </h2>
            </div>
          </div>
        ))}
        <NavLink className="no-underline text-2xl font-extrabold py-2 px-4 rounded-full text-primary d-link" to="/addrental"> Rent</NavLink>
      </div>
    </>
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
