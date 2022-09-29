import React from 'react';
import { NavLink } from 'react-router-dom';
import { BsStar, BsStarFill } from 'react-icons/bs';
import Rating from 'react-rating';

const Details = () => {
  const motorcycles = JSON.parse(localStorage.getItem('bikes'));
  const bikeId = parseInt(localStorage.getItem('bikeid'), 10);
  const filtered = motorcycles.filter((motorcycle) => motorcycle.id === bikeId);
  console.log('all bikes: ', motorcycles);
  console.log('filtered: ', filtered);
  console.log('only id: ', bikeId);

  return (
    <>
      <div className="relative flex flex-col w-full h-screen lg:py-12">
        <div className=" ">
          {filtered.map((motorcycle) => (
            <div className="flex flex-col lg:flex-row grow h-full lg:pt-20 lg:pb-10" key={motorcycle.id}>
              <div className="grow lg:w-2/5 flex items-center justify-center px-10 rounded-full aspect-square">
                <img
                  className="object-cover block rounded-full aspect-square w-full"
                  src={motorcycle.image}
                  alt={motorcycle.name}
                />
              </div>
              <div className="flex flex-col w-full lg:w-72 lg:mr-20 py-10 px-10 lg:px-0">
                <h1 className="uppercase text-center lg:text-right font-bold text-2xl">
                  {' '}
                  {motorcycle.bike_name}
                </h1>
                <h2 className="uppercase text-center lg:text-right font-bold text-2xl">
                  {motorcycle.amount}
                  $ per hour
                </h2>
                <p className="mb-10 text-center lg:text-right">
                  {motorcycle.details}
                </p>
                <div className="flex flex-col">
                  <NavLink className="no-underline flex items-center justify-center gap-3 text-2xl font-extrabold py-2 px-4 rounded-full text-primary d-link" to="/addrental"> Rent</NavLink>
                  <Rating
                    className="text-2xl font-extrabold py-2 px-4 ml-14"
                    step={1}
                    initialRating={4}
                    readonly
                    stop={5}
                    fractions={2}
                    emptySymbol={<BsStar color="#F4C362" />}
                    fullSymbol={<BsStarFill color="#F4C362" />}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
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
