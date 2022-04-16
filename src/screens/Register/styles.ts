import styled from 'styled-components/native';

export const Wrapper = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  align-items: center;
`;

export const WrapperPictureSelect = styled.View`
  margin-top: 15%;
  margin-right: 15%;
`;

export const WrapperInputs = styled.View`
  width: 100%;
  align-items: center;
  margin-top: 10%;
`;

export const WrapperButton = styled.View`
  width: 70%;
  margin-top: 20%;
  align-items: center;
`;
