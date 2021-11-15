import styled from 'styled-components'

export const Section = styled.section`
    color: gray;
    margin: 9rem 0;
    & .contact-container {
        // border: 1px solid gray;
    }
     & .submit-button {
         background-color: ${props => props.theme.colors.blue};
            
         &:hover {
            background-color: ${props => props.theme.colors.yellow};
         }
         
         &::focus {
            background-color: ${props => props.theme.colors.yellow};
         }
     }
`;
