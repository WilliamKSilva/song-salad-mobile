import styled from 'styled-components/native';

export const Wrapper = styled.View`
  flex: 1;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const WrapperLogo = styled.View`
  width: 62%;
  padding-vertical: 25%;
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Title = styled.Text`
  font-size: 30px;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 700;
  margin-left: 10px;
`;

export const WrapperButton = styled.View`
  width: 80%;
  align-items: center;
  margin-top: 25%;
`;

export const SocialGoogle = styled.TouchableOpacity``;
