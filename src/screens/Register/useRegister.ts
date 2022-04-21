import { useNavigation } from '@react-navigation/core';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth/react-native';
import { useState } from 'react';

export interface handleRegisterSubmit {
  email: string;
  password: string;
}

export function useRegister() {
  const { navigate } = useNavigation();

  const [responseMessage, setResponseMessage] = useState('');

  async function onRegister({ email, password }: handleRegisterSubmit) {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        setResponseMessage('Cadastro realizado com sucesso');
        console.log(responseMessage);
        // navigate('Introduction');
      })
      .catch((error) => {
        console.log(error);
        setResponseMessage('Erro ao realizar o cadastro');
      });
  }

  return {
    onRegister,
    responseMessage,
  };
}
