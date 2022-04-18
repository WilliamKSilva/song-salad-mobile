import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  align-items: center;
`;

export const Header = styled.View`
  width: 100%;
  padding-top: 20%;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 25px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Content = styled.View`
  width: 100%;
  align-items: center;
  margin-top: 20%;
  padding: 10px;
`;

export const WrapperButton = styled.View`
  width: 100%;
  align-items: center;
  margin-top: 20%;
`;
