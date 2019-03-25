
import React from 'react';
import '../style/spinner.css';

// eslint-disable-next-line react/prop-types
const Spinners = () => (
  <div style={{ textAlign: 'center' }}>
    <div className="lds-roller">
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
    </div>
    <div />
  </div>
);

export default Spinners;
