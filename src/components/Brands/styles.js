import styled, { keyframes } from "styled-components"

const InfiniteScrolling = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }`;


export const Section = styled.section`
  margin: 4rem 0;
  width: 100%;
  overflow: hidden;
`;

export const Text = styled.h4`
  text-transform: uppercase;
  text-align: center;
  color: ${props => props.theme.colors.gray};
`;

export const AnimatedSection = styled.div`
  display: flex;
  width: 200%;
  animation: ${InfiniteScrolling} 60s linear infinite;
`;

export const List = styled.ul`
  display: flex;
  list-style-type: none;
  align-items: center;
  padding-left: 0;
  margin: 0;
  & .logo-image {
    margin: 0 2rem;
    //test
    max-height: 50px;
    object-fit: contain !important;
    //padding: 0 2rem;
  }
`;

