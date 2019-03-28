
import React from 'react';
import '../styles/spinner.css';

// eslint-disable-next-line react/prop-types
const Spinners = ({ status }) => (
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
    {status && <h1>Problems With the connections</h1>}
  </div>
);

export default Spinners;
