import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { defaultTheme } from './src/global/styles/themes/default';
import { Login } from './src/screens/Login';

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Login />
    </ThemeProvider>
  );
}
