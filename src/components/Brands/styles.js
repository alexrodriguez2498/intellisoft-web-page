import styled, { keyframes } from "styled-components"

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.5rem 0;
  width: 100%;
`;

export const Text = styled.h4`
  text-transform: uppercase;
  text-align: center;
  color: ${props => props.theme.colors.gray};
`;


export const List = styled.ul`
  width: 100%;
  display: flex;
  list-style-type: none;
  //flex-wrap: wrap;
  align-items: center;
  padding: 3rem;
  margin: 0;
  & .logo-image {
    filter: grayscale(100%);
    margin: 0 2rem;
    //test
    max-height: 50px;
    object-fit: contain !important;
    //padding: 0 2rem;
  }
  @media (max-width: 992px) {
    padding: 0;
    flex-wrap: wrap;
    & .logo-image {
      width: 75px;
    }
  }
`;

