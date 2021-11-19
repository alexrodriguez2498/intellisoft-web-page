import styled from 'styled-components'

export const Section = styled.section`
    margin: 9rem 0;

    & h1 {
        text-align: center;
    }

    & p {
        text-align: center;
    }
     
     & .yellow-button {
         background-color: ${props => props.theme.colors.yellow};

         &:hover {
            background-color: ${props => props.theme.colors.blue};
         }
         
         &::focus {
            background-color: ${props => props.theme.colors.blue};
         }
     }
`;


export const ExpertiseCard = styled.div`
  position: relative;
  height: 543px;
  margin: 1rem auto;
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  & .line{
    position: absolute;
    top: 0;
    left: 0;
    &::before {
      content: '';
      border-left: 5px solid ${props => props.theme.colors.yellow};
      border-top: 5px solid ${props => props.theme.colors.yellow};
      padding-right: 6rem;
      padding-bottom: 5rem;
    }
  }
  border-radius: 5px;
  background-color: ${props => props.theme.colors.lightgray};
  border: 1px solid ${props => props.theme.colors.lightgray};
  max-width: 400px;
  padding: 3rem 2rem;

  & h2 {
    text-align: start;
  }

  & p {
    text-align: start;
  }

  & ul {
    list-style-type: none;

    & li {
      display: flex;
      align-items: center;

      &::before {
        content: '‣';
        margin: 0 .5rem;
        font-size: 2rem;
        color: ${props => props.theme.colors.yellow};
      }
    }

  }
`
