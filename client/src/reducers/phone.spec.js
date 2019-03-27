/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */
import phone from './phone';

describe('getPhones', () => {
  it('should return phones', () => {
    expect(phone({}, { type: 'FETCH_DATA_FULFILLED' })).toEqual({ data: undefined, status: 'success' });
  });
});
