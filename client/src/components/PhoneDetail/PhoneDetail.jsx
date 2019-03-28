/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import {
  Span, MainContainer, ColorSwatches,
} from '../../styles';
import { PhoneDetailDiv, PhoneDetailDescriptionDiv, PhoneMainImage } from './PhoneDetail.styles';

const PhoneDetail = ({ location }) => {
  const { state } = location;

  return (
    <MainContainer>
      { state ? (
        <PhoneDetailDiv>
          <PhoneMainImage src={state.phone.imageUrl} alt={state.phone.imageUrl} />
          <PhoneDetailDescriptionDiv>
            <Link to="/">Go Back</Link>
            <h1>{state.phone.name}</h1>
            <p>{state.phone.snippet}</p>
            <p>Colors:</p>
            <ColorSwatches>
              {state.phone.colors.map(color => <Span key={color} color={color} />)}
            </ColorSwatches>
          </PhoneDetailDescriptionDiv>
        </PhoneDetailDiv>
      ) : <Redirect to="/" />}
    </MainContainer>
  );
};

export default PhoneDetail;
