/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */
import phone from './phone';

describe('getPhones', () => {
  it('should return an object with data and status', () => {
    expect(phone({}, { type: 'FETCH_DATA_FULFILLED' })).toEqual({ data: undefined, status: 'success' });
  });

  it('should return status succes', () => {
    expect(phone({}, { type: 'FETCH_DATA_FULFILLED' }).status).toEqual('success');
  });

  it('should return status failed', () => {
    expect(phone({}, { type: 'FETCH_DATA_REJECTED' }).status).toEqual('failed');
  });
});
