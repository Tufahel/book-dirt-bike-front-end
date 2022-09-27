import React from 'react';
import './Details.css';

const Details = () => {
  // const motorcycles = localStorage.getItem('bikes');
  const motorcycles = JSON.parse(localStorage.getItem('bikes'));
  const bikeId = localStorage.getItem('bikeid');
  console.log('all bikes: ', motorcycles);
  console.log('only id: ', bikeId);

  return (
    <div>
      <h2>
        name:
        {' '}
        {motorcycles.bike_name}
      </h2>
      <h2>
        price:
        {' '}
        {motorcycles.amount}
      </h2>
      <h2>
        details:
        {' '}
        {motorcycles.details}
      </h2>

      <hr />
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
