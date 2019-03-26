import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 90%;
`;

export const Li = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 30%;
  margin-bottom: 3rem;
  &:hover {
    animation: zoominoutsinglefeatured;
  }
`;


export const Img = styled.img`
  max-width: 80%;
  display: flex;
  margin: 0 auto;
`;

export const PhoneContainer = styled.div`
  margin: 0 auto;
`;

export const A = styled.a`
  text-decoration: none;
`;
