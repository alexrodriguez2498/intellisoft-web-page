import styled from 'styled-components'

export const Section = styled.section`
    color: gray;
    & .contact-container {
        // border: 1px solid gray;
    }
     & .submit-button {
         background-color: ${props => props.theme.colors.blue};
     }
`;
