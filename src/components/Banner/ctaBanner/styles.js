import styled from 'styled-components'

export const Section = styled.section`
  background-color: ${props => props.theme.colors.lightYellow};
  & h1 {
    color: ${props => props.theme.colors.yellow};
  }
`

export const CtoButton = styled.button`
  padding: .5rem 2rem ;
  background-color: ${props => props.theme.colors.lightYellow};
  border: 1px solid ${props => props.theme.colors.blue};
  color: ${props => props.theme.colors.blue};
  border-radius: 5px;
   &:hover {
     color: white;
     background-color: ${props => props.theme.colors.blue};
   }
`
