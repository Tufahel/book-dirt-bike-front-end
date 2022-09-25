import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { postMotorcycle } from '../../redux/actions/Motorcycle';

const AddMotorcycle = () => {
  const motorcycle = useSelector((state) => state.MotorcyclesReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [details, setDetails] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postMotorcycle({ name, details, price },
      navigate('/motorcycle')));
    setName('');
    setDetails('');
    setPrice('');
  };
  return (
    motorcycle && (
      <div>
        <h2>Add Motorcycle</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Motorcycle Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Motorcycle Details"
            value={details}
            onChange={(e) => setDetails(e.target.value)}
          />
          <input
            type="text"
            placeholder="Motorcycle Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <button type="submit">Add Motorcycle</button>
        </form>
      </div>
    )
    // <div>
    //   <form onSubmit={handleSubmit}>
    //     <input
    //       type="text"
    //       placeholder="bike name"
    //       value={name}
    //       onChange={(e) => setName(e.target.value)}
    //     />
    //     <input
    //       type="text"
    //       placeholder="bike details"
    //       value={details}
    //       onChange={(e) => setDetails(e.target.value)}
    //     />
    //     <input
    //       type="text"
    //       placeholder="bike price"
    //       value={price}
    //       onChange={(e) => setPrice(e.target.value)}
    //     />
    //     <button type="submit">Add Motorcycle</button>
    //   </form>
    // </div>
  );
};

export default AddMotorcycle;
