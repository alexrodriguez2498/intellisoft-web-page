import styled from "styled-components"

export const Section = styled.section`
  margin: 9rem 0;

  & .styles-module_item-container__a8zaY {
    width: auto !important;
    margin: 0 1rem;
  }
`

export const Comment = styled.div`
  min-width: 333px;
  padding: 1rem;
  margin: 0 2rem;
`

export const Scrollable = styled.div`
  display: flex;
  overflow-x: auto;
`

export const ScrollableContainer = styled.div`
    & h1 {
      margin-bottom: 3rem;
      @media (max-width: 600px) {
        text-align: center;
        font-size: 30px;
    }
      @media (max-width: 420px) {
        font-size: 24px;
      }
  }
`
