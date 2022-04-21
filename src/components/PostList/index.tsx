import React from 'react-native';
import { Container } from './styles';
import { Post } from '../Post';
import { IPost } from '../../interfaces/post';

type Props = {
  dataPosts: IPost[];
};

export function PostList({ dataPosts }: Props) {
  return (
    <Container
      data={dataPosts}
      renderItem={({ id, description, songContent, userInfo }: IPost) => (
        <Post
          id={id}
          description={description}
          songContent={{
            album: songContent.album,
            albumImage: songContent.albumImage,
            song: songContent.song,
          }}
          userInfo={{
            name: userInfo.name,
            image: userInfo.image,
          }}
        />
      )}
      keyExtractor={(item: any) => item.id}
      showsVerticalScrollIndicator
      alwaysBounceVertical
    />
  );
}
