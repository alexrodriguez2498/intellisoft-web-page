import styled from 'styled-components'

export const Section = styled.section`
  margin: 10rem 0;
  & .special-button {
    text-decoration: none;
    padding: 0.5rem 1rem;
    background-color: transparent;
    color:  ${props => props.theme.colors.blue};
    border: 1px solid ${props => props.theme.colors.blue};
    border-radius: 5px;
    &:hover {
      transition: background-color ease-in .2s;
      cursor: pointer;
      color:  white;
      background-color:  ${props => props.theme.colors.blue};
    }
  }
   & .image-wrapper {
     position: relative;
     display: grid;
     place-items: center;
     &:hover {
       & img {
         opacity: 0.2 !important;
       }
       & a {
         display: block;
       }
     }
     & a {
       text-decoration: none;
       position: absolute;
       display: none;
       padding: 0.5rem 1rem;
       color: white !important;
       background-color:  ${props => props.theme.colors.blue};
       border: 1px solid ${props => props.theme.colors.blue};
       border-radius: 5px;
         &:hover {
           transition: background-color ease-in .2s;
           color: ${props => props.theme.colors.blue} !important;
           background-color:  transparent;
           cursor: pointer;
         }
       } 
   }
`

