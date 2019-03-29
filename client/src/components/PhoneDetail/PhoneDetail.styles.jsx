import styled from 'styled-components';

export const PhoneDetailDiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;
max-width: 90%;
@media (min-width: 720px) {
  flex-direction: row;
}
`;

export const PhoneDetailDescriptionDiv = styled.div`
margin: 0 auto;
max-width: 50%;
flex-direction: column;
margin: 2rem 0;
>h1 {
  line-height: 3rem;
  font-size: 48px;
  font-weight: 800;
  margin: 2em 0 1em;
}
>p {
  margin-bottom: 2rem;
}
`;

export const PhoneMainImage = styled.img`
  max-width: 35%;
`;

export const ColorSwatches = styled.div`
  display: flex;
  justify-content: center;
  width: 30%;
`;
