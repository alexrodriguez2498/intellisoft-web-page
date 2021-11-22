import styled from 'styled-components'

export const Section = styled.section`
    color: gray;
    margin: 9rem 0;
    & .contact-container {
        // border: 1px solid gray;
    }
     & .submit-button {
         background-color: ${props => props.theme.colors.blue};
        border: 1px solid ${props => props.theme.colors.blue};
            
         &:hover {
           transition: background-color ease-in .2s;
           background-color: transparent;
            color: ${props => props.theme.colors.blue};
         }
         
         &:focus {
            background-color: ${props => props.theme.colors.yellow};
         }
     }
`;
