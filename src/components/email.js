import React from 'react';
import styled from 'styled-components';
import { email }  from '../../config';
import Side  from './side';

const StyledLinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  &:after {
    content: '';
    display: block;
    width: 1px;
    height: 90px;
    margin: 0 auto;
    background-color: ${props => props.theme.colors.yellow};
  }

  a {
    margin: 20px auto;
    padding: 10px;
    font-size: 12px;
    color: ${props => props.theme.colors.yellow};
    line-height: 5px;
    letter-spacing: 0.1em;
    writing-mode: vertical-rl;

    &:hover,
    &:focus {
      transform: translateY(-3px);
      color: ${props => props.theme.colors.yellow};
      font-width: bold; 
    }
  }
`;

const Email = ({ isHome }) => (
  <Side isHome={isHome} orientation="right">
    <StyledLinkWrapper>
      <a href={`mailto:${email}`}>{email}</a>
    </StyledLinkWrapper>
  </Side>
);

export default Email;
