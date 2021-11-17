import styled from 'styled-components'

export const Section = styled.section`
  margin: 9rem 0 ;
  
  & h1 {
    text-align: center;
  }
  
  & .special-list {
    list-style-type: none;
    @media (max-width: 600px) {
      overflow: auto;
      display: flex;
    }
  }
  
  & ul {
    list-style-type: none;
  }
  & .service-link {
    font-weight: bold;
    padding: .5rem;
    @media (max-width: 600px) {
      width: 10rem;
      text-align: center;
    }

    &:hover {
      cursor: pointer;
      color: ${props => props.theme.colors.yellow};
      transform: scale(1.1);
      transition: all .2s ease-in-out;
      //&::before {
      //  content: '-';
      //  width: 1rem;
      //  margin-right: .1rem;
      //}
    }
  }

  & .active-link {
    color: ${props => props.theme.colors.yellow};
    transform: scale(1.1);
    //&::before {
    //  content: '-';
    //  width: 1rem;
    //  margin-right: .1rem;
    //}
  }
  
  & .link-section {
    padding-left: 1rem;
    padding-top: 1rem;
  }
  
  & .services-description {
    // background-color: ${props => props.theme.colors.blue};
    // color: whitesmoke;
  }
  
  & .service {
    color: ${props => props.theme.colors.gray};
    position: relative;
    padding: 2rem;
    & h3, p {
      text-align: center;
    }
    & li::before {
      content: '•';
      color: ${props => props.theme.colors.yellow};
      margin-right: .5rem;
    }
    & li {
      padding: .5rem 0;
      &:hover {
        cursor: pointer;
        color: ${props => props.theme.colors.blue};
        &::before {
          color: ${props => props.theme.colors.blue};
        }
      }
    }
    & .image {
      object-fit: contain;
      z-index: -1;
      position: absolute;
      width: 150px;
      height: 150px;
      opacity: .1;
    }
  }
`;
