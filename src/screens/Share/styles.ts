import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  align-items: center;
`;

export const Header = styled.View`
  width: 100%;
  padding-top: 10%;
  align-items: center;
  justify-content: center;
`;

export const WrapperContent = styled.View`
  align-items: center;
  margin-top: 5%;
`;
