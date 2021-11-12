import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { ThemeProvider } from "styled-components";
import theme from './src/styles/theme';
import { GlobalStyles } from "./src/styles/GlobalStyle"

export const wrapRootElement = ({element}) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    {element}
  </ThemeProvider>
)

