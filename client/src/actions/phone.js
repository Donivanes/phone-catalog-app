/* eslint-disable consistent-return */
import axios from 'axios';
import { FETCH_DATA_FULFILLED, FETCH_DATA_REJECTED } from '../constants/ActionTypes';

// eslint-disable-next-line import/prefer-default-export
export const fetchData = () => (dispatch, getState) => {
  const { phone } = getState();
  if (!phone || phone.data === null) {
    const getPhones = 'http://localhost:3000/api/phones';
    return axios.get(getPhones)
      .then((response) => {
        console.log(response)
        dispatch({ type: FETCH_DATA_FULFILLED, payload: response.data });
      })
      .catch((err) => {
        dispatch({ type: FETCH_DATA_REJECTED, payload: err });
      });
  }
};
