import styled from 'styled-components'

export const Section = styled.section`
  //display: flex;
  display: ${props => props.display};
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  background-color: white;
  z-index: 111;
  overflow-y: hidden !important;
`
