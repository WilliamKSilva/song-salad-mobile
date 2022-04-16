import styled from 'styled-components/native';

export const Wrapper = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
`;

export const PictureText = styled.Text`
  font-size: 16px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.black};
  margin-left: 15px;
  text-decoration: underline;
`;

export const WrapperPictureText = styled.TouchableOpacity``;
