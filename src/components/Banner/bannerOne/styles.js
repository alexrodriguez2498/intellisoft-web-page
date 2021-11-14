import styled from 'styled-components';

export const Section = styled.section`
  padding-top: 8rem;
  padding-bottom: 4rem;
  & .centered-column {
    align-self: center;
  }
  & .text {
    margin: 1rem 0;
  }
  & .yellow-text {
    color: #F79416;
    margin: 0;
  }
`;

export const BannerTextOne = styled.h1`
  margin: 0;
  display: flex;
  align-items: center;
`;

export const FilledButton = styled.button`
  padding: 1rem;
  margin: 0.5rem;
  border-radius: 5px;
  font-weight: bold;
  background-color: ${props => props.theme.colors.yellow};
  border: 1px solid ${props => props.theme.colors.yellow};
`;

export const OutlinedButton = styled.button`
  padding: 1rem;
  margin: 0.5rem;
  border-radius: 5px;
  background-color: white;
  color: ${props => props.theme.colors.blue};
  font-weight: bold;
  border: 1px solid ${props => props.theme.colors.blue};
`;


