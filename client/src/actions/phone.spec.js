/* eslint-disable no-undef */
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import * as actions from './phone';
import * as types from '../constants/ActionTypes';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

jest.mock('axios');

describe('async actions', () => {
  beforeAll(() => {
    axios.mockImplementation(data => Promise.resolve({
      data: {
        body: { phones: data },
      },
    }));
  });

  it('creates FETCH_TODOS_SUCCESS when fetching todos has been done', async () => {
    const expectedActions = [
      { type: types.FETCH_DATA_FULFILLED, body: { todos: [] } },
    ];

    const store = mockStore({ phones: [] });

    return store.dispatch(actions.fetchData()).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
