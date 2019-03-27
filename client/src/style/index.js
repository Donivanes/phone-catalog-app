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
  height: 24px;
  width: 24px;
  border-radius: 50%;
  display: block;
  margin-right: 10px;
`;

export const SpanDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 50%;
`;

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
  }
  >p {
    margin-bottom: 2rem;
  }
`;

export const PhoneMainImage = styled.img`
  max-width: 35%;
`;
