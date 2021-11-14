import styled from "styled-components"

export const CustomNav = styled.nav`
  display: flex;
  align-items: center;
  padding-left: 2rem ;
  position: fixed;
  width: 100%;
  z-index: 11;
  background-color: ${props => props.background};
`;

export const LogoContainer = styled.figure`
  &:hover {
    cursor: pointer;
  }
`;

export const LinksContainer = styled.div`
  margin: auto;
  & .link {
    color: black;
    text-decoration: none;
    padding: 0.8rem;
    margin: 0 1rem;
    border-radius: 5px;
     &:hover {
       cursor: pointer;
       background-color: ${props => props.theme.colors.yellow};
     }
  }
  & .active-link {
    border: 1px solid ${props => props.theme.colors.yellow};
  }
`;





