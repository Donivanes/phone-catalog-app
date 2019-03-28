/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';

import PhoneDetail from '../../src/components/PhoneDetail';


describe('PhoneDetail', () => {
  it('renders without exploding', () => {
    const shallowApp = shallow(<PhoneDetail location={{}} />);
    expect(shallowApp).toBeDefined();
  });

  it('matcher snapshot', () => {
    const shallowApp = shallow(<PhoneDetail location={{ state: {phone:  { name: 'Xiaomi', imageUrl: '', colors: ['black'], snippet: 'so cool' } } }}  />);
    expect(shallowApp).toMatchSnapshot();
  });
});
