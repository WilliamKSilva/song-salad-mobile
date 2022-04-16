import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';

export const Wrapper = styled.View.attrs(() => ({
  elevation: 5,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 0 },
  shadowOpacity: 0.1,
  shadowRadius: 5,
}))`
  width: 100%;
  padding-top: 8%;
  background-color: ${({ theme }) => theme.colors.white};
  align-items: center;
  flex-direction: row;
`;

export const Title = styled.Text`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.black};
  font-weight: 700;
  padding: 20px;
  margin-left: 22%;
`;

export const WrapperIcon = styled.TouchableOpacity``;

export const GoBackIcon = styled(Ionicons)`
  color: ${({ theme }) => theme.colors.primary};
  margin-left: 15px;
`;
