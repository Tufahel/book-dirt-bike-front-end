import React from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import { useSelector, useDispatch } from 'react-redux';
// import { getMotorcycles } from '../../redux/actions/Motorcycle';
import './Detail.css';

const Details = () => {
  const { id } = useParams();
  const motorcycles = useSelector((state) => state.MotorcyclesReducer);
  const { state } = useLocation();
  const { bike } = state || { bike: motorcycles } || { bike: null };

  return (
    bike && (
      <div className="bike__container">
        {motorcycles.value?.map((motorcycle) => (
          <div key={motorcycle.id} className="bike__container">
            <div className="bike__image">
              <img className="imagebike" src={motorcycle.image} alt="bike" />
            </div>
            <div className="bike__details">
              <h3>{motorcycle.name}</h3>
              <p>{motorcycle.details}</p>
              <p>{motorcycle.price}</p>
            </div>
          </div>
        ))}
        <Link to={`/motorcycle/${id}/reserve`}>Reserve</Link>
      </div>
    )
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
