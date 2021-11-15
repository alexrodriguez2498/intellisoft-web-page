import styled from "styled-components";

export const FooterSection = styled.footer`
    margin: 2rem 0;
     padding: 2rem 0;

    & ul {
        list-style-type: none;
         & li {
             margin: 0;
             &:hover {
                 color: ${props => props.theme.colors.blue};
                 cursor: pointer;
             }
         }
    }

    & .social-icon {
        &:hover {
            cursor: pointer;
            color: ${props => props.theme.colors.yellow};
        }
    }

    & .text-gray {
        color: gray;
         & .small small {
             &:hover {
                 color: ${props => props.theme.colors.blue};
                 cursor: pointer;
             }
         }
    }
`;