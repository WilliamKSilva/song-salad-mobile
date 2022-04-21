import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background};
  padding-top: 40px;
`;

export const UserInfo = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 10px;
`;

export const UserName = styled.Text`
  font-size: 15px;
  color: ${({ theme }) => theme.colors.black};
  margin-left: 10px;
`;

export const UserImage = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 35px;
`;

export const PostContent = styled.View`
  width: 90%;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 10px;
  min-width: 350px;
`;

export const WrapperContent = styled.View`
  width: 100%;
  align-items: center;
  flex-direction: row;
`;

export const AlbumImage = styled.Image`
  width: 70px;
  height: 70px;
`;

export const WrapperTitles = styled.View`
  flex-direction: column;
  margin-left: 15px;
`;

export const SongTitle = styled.Text`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 600;
`;

export const AlbumTitle = styled.Text`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.black};
`;

export const Description = styled.Text`
  font-size: 17px;
  margin-top: 10%;
  color: ${({ theme }) => theme.colors.black};
  font-weight: 400;
`;
