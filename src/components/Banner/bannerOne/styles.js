import styled from 'styled-components';

export const Section = styled.section`
  padding-right: 1rem;
  padding-top: 8rem;
  padding-bottom: 4rem;
  & .centered-column {
    align-self: center;
  }
  & .text {
    margin: 1rem 0;
    @media (max-width: 600px) {
      text-align: center;
    }
  }
  & .yellow-text {
    color: #F79416;
    margin: 0;
    @media (max-width: 600px) {
      text-align: center;
    }
  }
`;

export const BannerTextOne = styled.h1`
  margin: 0;
  display: flex;
  align-items: center;
  @media (max-width: 600px) {
    text-align: center;
  }
`;

export const FilledButton = styled.button`
  padding: 1rem 0;
  margin: 0.5rem;
  border-radius: 5px;
  font-weight: bold;
  background-color: ${props => props.theme.colors.yellow};
  border: 1px solid ${props => props.theme.colors.yellow};
    &:hover {
      transition: background-color ease-in .2s;
      background-color: transparent;
      color:  ${props => props.theme.colors.yellow};
    }
  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const OutlinedButton = styled.button`
  padding: 1rem 0;
  margin: 0.5rem;
  border-radius: 5px;
  background-color: white;
  color: ${props => props.theme.colors.blue};
  font-weight: bold;
  border: 1px solid ${props => props.theme.colors.blue};
  &:hover {
    transition: background-color ease-in .2s;
    background-color: ${props => props.theme.colors.blue};
    color:  white;
  }
  @media (max-width: 600px) {
    width: 100%;
  }
`;


