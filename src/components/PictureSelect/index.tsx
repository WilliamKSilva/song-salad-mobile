import React, { Image } from 'react-native';
import { PictureText, Wrapper, WrapperPictureText } from './styles';

export function PictureSelect() {
  return (
    <Wrapper>
      <Image
        source={require('../../assets/user-image-example.jpg')}
        style={{ width: 70, height: 70, borderRadius: 35 }}
      />
      <WrapperPictureText>
        <PictureText>Escolha uma foto...</PictureText>
      </WrapperPictureText>
    </Wrapper>
  );
}
