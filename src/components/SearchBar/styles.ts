import styled from 'styled-components/native';

export const Container = styled.View`
  width: 70%;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 10px;
  padding: 8px;
  flex-direction: row;
  align-items: center;
`;
