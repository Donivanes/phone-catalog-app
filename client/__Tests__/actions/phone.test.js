/* eslint-disable no-undef */
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import * as actions from '../../src/actions/phone';
import * as types from '../../src/constants/ActionTypes';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

jest.mock('axios');

const mockPhone = {
  "id": "1",
  "imageUrl": "https://cdn.yoigo.com/images/23256_samsung-galaxy-s10-negro-front.png",
  "name": "Samsung Galaxy S10",
  "snippet": "Suena a la típica frase del lobo feroz, pero con la cámara frontal de 10 MP AF, con la trasera de Dual de 12 MP + 12 MP + 16 MP AF y Flash y con los altavoces Estéreo AKG + Dolby Atmos vas a poder ver y oír mucho mejor. Llévatelo al mejor precio con nuestras ofertas en Tarifas Móviles de Tarjeta o Contrato. ¡Te mereces lo mejor! ",
  "colors": ["rgb(0, 0, 0)","rgb(0, 255, 255)"]
  }

describe('async actions', () => {

  it('creates FETCH_TODOS_SUCCESS when fetching todos has been done', async () => {
    const store = mockStore({ phones: [] });
    const expectedActions = [
      { type: types.FETCH_DATA_FULFILLED, payload: [mockPhone] },
    ];

    // Mock axios response
    axios.get.mockResolvedValue(Promise.resolve({data: [mockPhone]}));

    await store.dispatch(actions.fetchData())

    expect(store.getActions()).toEqual(expectedActions);
  });
});
