
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
    {status && <h1>Problems with the connection</h1>}
  </div>
);

export default Spinners;
