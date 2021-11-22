import styled from 'styled-components'

export const Section = styled.section`
  margin: 10rem 0;
  background-color: ${props => props.theme.colors.lightYellow};
  & h1 {
    color: ${props => props.theme.colors.yellow};
  }
  & p {
    @media (max-width: 600px) {
      margin-top: 3rem;
    }
  }
  
  & .country-button {
    background-color: ${props => props.theme.colors.blue} !important;
    color: white;
  }
  @media (max-width: 600px) {
    text-align: center;
  }
`

export const CtoButton = styled.button`
  padding: .5rem 2rem ;
  background-color: ${props => props.cancel ? 'red' : props.theme.colors.lightYellow};
  border: 1px solid ${props => props.cancel ? 'red' : props.theme.colors.blue};
  color: ${props => props.cancel ? 'white' : props.theme.colors.blue};
  border-radius: 5px;
   &:hover {
     transition: background-color ease-in .2s;
     color: ${props => props.cancel ? 'red' : 'white'};
     background-color: ${props => props.cancel ? 'transparent' : props.theme.colors.blue};
   }
`
export const RegularButton = styled.button`
  margin: 0 1rem;
  padding: .5rem 2rem ;
  background-color: ${props => props.theme.colors.blue};
  border: 1px solid ${props => props.theme.colors.blue};
  color: white;
  border-radius: 5px;
  &:hover {
    transition: background-color ease-in .2s;
    color: ${props => props.theme.colors.blue};
    background-color: transparent;
  }
`

export const CustomModalBody = styled.div`
  height: 550px;
`
