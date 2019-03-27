import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3rem;
`;

export const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 90%;
`;

export const Li = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 60%; 
  margin-bottom: 3rem;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,.2);

  &:hover {
    transition: box-shadow .3s ease-out,-webkit-box-shadow .3s ease-out;
    box-shadow: 0 2px 8px 0 rgba(0,0,0,.5);
    >A{
        >div{
          >img{
            transition: transform .3s ease-out,opacity .3s ease-out,-webkit-transform .3s ease-out;
            transform: translate3d(0,-33px,0) scale(1.02);
          }
        }
    }
  }

  @media (min-width: 720px) {
    min-width: 40%;
    background-color: red;
  }
`;


export const Img = styled.img`
  max-width: 50%;
  display: flex;
  margin: 0 auto;
  transition: transform .3s ease-out,opacity .3s ease-out,-webkit-transform .3s ease-out;
  transform: translate3d(0,-23px,0) scale(1);
`;

export const PhoneContainer = styled.div`
  margin: 0 auto;
`;

export const Description = styled.div`
  height: 7rem;
  color: #000;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  text-decoration: none;
`;

export const Span = styled.span`
  background-color: ${props => props.color};
  height: 16px;
  width: 16px;
  border-radius: 50%;
  display: block;
  margin-right: 10px;
`;

export const SpanDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 20%;
`;

export const PhoneDetailDiv = styled.div`
  display: flex;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 720px) {
    flex-direction: row;
    background-color: red;
  }
`;

export const PhoneDetailDescriptionDiv = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

export const PhoneMainImage = styled.img`
  max-width: 35%;
`;
