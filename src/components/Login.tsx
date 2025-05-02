//Anotação: Este arquivo é componente de login para o aplicativo de bate-papo. Ele permite que o usuário insira seu nome para então fazer login no aplicativo. O componente é simples e direto com um campo de entrada de texto e um botão de login. Ele usa os componentes View, Text, TextInput e Button do React Native para criar a interface do usuário. O estilo é aplicado diretamente no componente, mas será movido para um arquivo separado para melhorar a organização e possibilitar a reutilização. O componente aceita três propriedades: username (o nome do usuário), onChangeUsername (uma função para atualizar o nome do usuário) e onLogin (uma função a ser chamada quando o usuário clicar no botão de login).
//O componente é reutilizável e pode ser usado em diferentes partes do aplicativo onde o login do usuário vier a ser necessário. Futuramente incluir validação de entrada ou outras funcionalidades. (TO-DO: Adicionar validação de entrada e melhorar a experiência do usuário com feedback visual.)

import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';

type Props = {
  username: string;
  onChangeUsername: (text: string) => void;
  onLogin: () => void;
};

export function Login({ username, onChangeUsername, onLogin }: Props) {
  return (
    <View>
      <Text>Digite seu nome:</Text>
      <TextInput
        placeholder="Ex: Lady Gaga"
        value={username}
        onChangeText={onChangeUsername}
      />
      <Button title="Entrar" onPress={onLogin} />
    </View>
  );
}
