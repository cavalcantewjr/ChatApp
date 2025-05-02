// Anotação: Este arquivo define um componente que exibe uma mensagem com seu nome do remetente, texto e hora.
// Ele usa os componentes View e Text do React Native para criar a interface do usuário.
// O componente aceita propriedades para o nome do remetente, o texto da mensagem e a hora de envio, e aplica estilos de um styleSheet externo.
// O estilo foi importado de um arquivo separado, garantindo uma separação de interesses e facilitando a manutenção do código.
// O componente é reutilizável e pode ser usado em diferentes partes do aplicativo onde a exibição de mensagens é necessária.

import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../styles/MessageItem.styles';

type MessageProps = {
    sender: string;
    text: string;
    time: string;
  };

export function MessageItem({ sender, text, time }: MessageProps) {
    return (
      <View style={styles.message}>
        <Text style={styles.meta}>{sender} - {time}</Text>
        <Text>{text}</Text>
      </View>
    );
  }
  
  