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

export const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    & img { 
        padding: 1rem;  
    }
`