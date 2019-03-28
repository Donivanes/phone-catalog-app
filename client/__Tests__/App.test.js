/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import React from 'react';
import { shallow, configure } from 'enzyme';

import App from '../src/App';

configure({ adapter: new Adapter() });
describe('App', () => {
  it('renders without exploding', () => {
    const shallowApp = shallow(<App />);
    expect(shallowApp).toBeDefined();
  });
});
