import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './Motorcycle.css';
import { getMotorcycles, deleteMotorcycle } from '../../redux/actions/Motorcycle';
import Details from './Details';
// import AddMotorcycle from './AddMotorcycle';
import Navigation from '../Navigation/Navigation';

function Motorcycle() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const dispatch = useDispatch();
  const motorcycles = useSelector((state) => state.MotorcyclesReducer);
  const navigate = useNavigate();
  const user = localStorage.getItem('user');
  // console.log(motorcycles);
  // dispatch(getMotorcycles(), []);
  useEffect(() => {
    dispatch(getMotorcycles());
  }, []);

  const handleDelete = (id) => {
    dispatch(deleteMotorcycle(id));
  };

  const setModalIsOpenToTrue = () => {
    setModalIsOpen(true);
  };

  const setModalIsOpenToFalse = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <Navigation />
      <div className="bike">
        {motorcycles.value?.map((motorcycle) => (
          <button
            onClick={setModalIsOpenToTrue}
            key={motorcycle.id}
            type="button"
            className="bike__button"
          >
            <div key={motorcycle.id} className="bike__container">
              <div className="bike__image">
                <img className="imagebike" src={motorcycle.image} alt="bike" />
              </div>
              <div className="bike__details">
                <h3>{motorcycle.name}</h3>
                <p>{motorcycle.details}</p>
                <p>{motorcycle.price}</p>
                {user && (
                  <button
                    type="button"
                    onClick={() => handleDelete(motorcycle.id)}
                  >
                    Delete
                  </button>
                )}
              </div>
            </div>
          </button>
        ))}
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={setModalIsOpenToFalse}
          className="modal"
          overlayClassName="overlay"
        >
          <button type="button" onClick={setModalIsOpenToFalse}>X</button>
          <Details />
        </Modal>

        {
        user && (
          <button
            type="button"
            onClick={() => navigate('/addmotorcycle')}
          >
            Add Bike
          </button>
        )

      }
      </div>

    </>
  );
}

export default Motorcycle;
