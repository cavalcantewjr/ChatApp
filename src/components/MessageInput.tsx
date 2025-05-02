// Anotação: Este componente é usado para inserir mensagens no aplicativo de bate-papo. Ele contém um campo de entrada de texto e um botão para enviar a mensagem.
// Ele recebe três propriedades: value (o texto da mensagem atual), onChange (uma função para atualizar o texto da mensagem) e onSend (uma função para enviar a mensagem).
// O componente usa os componentes TextInput e Button do React Native para criar o campo de entrada e o botão de envio.
// Ele também usa um StyleSheet segregado em arquivo para sua estilização. Feito dessa forma para facilitar a manutenção e reutilização de estilos em todo o app.

import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { inputStyles as styles } from '../styles/MessageInput.styles';

type Props = {
  value: string;
  onChange: (text: string) => void;
  onSend: () => void;
};

export function MessageInput({ value, onChange, onSend }: Props) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Digite sua mensagem"
        value={value}
        onChangeText={onChange}
      />
      <Button title="Enviar" onPress={onSend} />
    </View>
  );
}
