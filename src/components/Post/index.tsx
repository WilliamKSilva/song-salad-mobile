import React from 'react-native';
import { IPost } from '../../interfaces/post';
import {
  AlbumImage,
  AlbumTitle,
  Container,
  Description,
  PostContent,
  SongTitle,
  UserInfo,
  UserImage,
  UserName,
  WrapperContent,
  WrapperTitles,
} from './styles';

type Props = IPost;

export function Post({ userInfo, songContent, description }: Props) {
  return (
    <Container>
      <UserInfo>
        <UserImage source={require('../../assets/user-image-example.jpg')} />
        <UserName>{userInfo.name}</UserName>
      </UserInfo>
      <PostContent>
        <WrapperContent>
          <AlbumImage source={require('../../assets/album-cover.jpg')} />
          <WrapperTitles>
            <SongTitle>{songContent.song}</SongTitle>
            <AlbumTitle>{songContent.album}</AlbumTitle>
          </WrapperTitles>
        </WrapperContent>
        <Description>{description}</Description>
      </PostContent>
    </Container>
  );
}
