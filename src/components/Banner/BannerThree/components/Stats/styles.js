import styled from 'styled-components'

export const StatContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const Stat = styled.div`
  & h1 {
    color: ${props => props.theme.colors.yellow};
    margin: 0;
  }
  
  & p {
    text-align: center;
    color: ${props => props.theme.colors.gray};
    font-weight: bold;
  }
`;
