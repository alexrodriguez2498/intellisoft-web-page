import styled from 'styled-components';
import {
  Col
} from "reactstrap"


export const LeftSection = styled(Col)`
  color: red;
`;

export const RightSection = styled(Col)`
  color: blue;
`;

export const Section = styled.section`
  padding: 2rem 0;
  & .centered-column {
    align-self: center;
  }
  & .text {
    margin: 1rem 0;
  }
`;t push -u origin main
export const BannerTextOne = styled.h1`
  margin: 0;
  display: flex;
  align-items: center;
`;

export const BannerTextTwo = styled.h1`
  color: #F79416;
  margin: 0;
`;


