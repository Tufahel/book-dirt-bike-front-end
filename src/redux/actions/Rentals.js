import { fetchRentalsData } from '../../api/Api';

export const GET_RENTALS = 'GET_RENTALS';

export const getRentals = () => async (dispatch) => {
  const rentals = await fetchRentalsData();
  dispatch({
    type: GET_RENTALS,
    payload: rentals.map((rental) => ({

      id: rental.user_id,
      bike: rental.motorcycle_id,
      booked: rental.book_date,
      return: rental.return_date,
    })),
  });
};
