import styled from 'styled-components'

export const StatContainer = styled.div`
  background-color: #fdf1e5;
  padding: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom:10rem;
`;

export const Stat = styled.div`
  text-align: center;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  & h1 {
    color: ${props => props.theme.colors.yellow};
    margin: 0;
    font-size: 72px;
    @media (max-width: 1200px) {
      font-size: 60px;
    }
    @media (max-width: 1100px) {
      font-size: 45px;
    }
  }
  
  & p {
    color: ${props => props.theme.colors.gray};
    font-weight: bold;
  }
`;
