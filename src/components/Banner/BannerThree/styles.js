import styled from 'styled-components';

export const Section = styled.section`
  margin: 10rem 0;
  & h1, p {
    text-align: center;
  }
  @media (max-width: 992px) {
    .lightbulb {
      display: none;
    }
  }
`;
