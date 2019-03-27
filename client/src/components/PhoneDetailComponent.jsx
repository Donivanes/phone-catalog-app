/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import {
  Span, MainContainer, PhoneDetailDiv, PhoneDetailDescriptionDiv, PhoneMainImage, SpanDiv,
} from '../style';

export default class PhoneDetailComponent extends Component {
  render() {
    const { state } = this.props.location;
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
              <SpanDiv>
                {state.phone.colors.map(color => <Span key={color} color={color} />)}
              </SpanDiv>
            </PhoneDetailDescriptionDiv>
          </PhoneDetailDiv>
        ) : <Redirect to="/" />}
      </MainContainer>
    );
  }
}
