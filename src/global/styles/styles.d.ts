import styled from 'styled-components/native';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      white: string;
      gray: string;
      black: string;
      background: string;
    };
  }
}
