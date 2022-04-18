import styled from 'styled-components/native';

export const Container = styled.View`
  width: 80%;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 10px;
  padding: 7px;
  flex-direction: row;
  margin-bottom: 20px;
  flex-direction: row;
`;

export const Number = styled.Text`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: 700;
`;

export const Text = styled.Text`
  flex: 1;
  flex-wrap: wrap;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.black};
  font-weight: 500;
`;
