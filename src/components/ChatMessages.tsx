// Anotação: Este componente renderiza uma interface de bate-papo com uma lista de mensagens.
// Ele usa uma FlatList(mudar futuramente) para exibir as mensagens e um componente MessageItem para cada mensagem.
// As mensagens são invertidas para mostrar a mensagem mais recente na parte inferior.
// O componente aceita uma lista de mensagens como propriedades e usa o keyExtractor para identificar exclusivamente cada mensagem por seu ID.
// Os estilos são definidos usando StyleSheet para garantir um estilo consistente em diferentes plataformas. (Estudar a possibilidade de usar um arquivo StyleSheet.create para criar estilos reutilizáveis.)
// TODO: Adicionar mais funcionalidades, como animações ou interações, estudar o uso de bibliotecas como react-native-reanimated ou react-native-gesture-handler.

import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import { MessageItem } from './MessageItem';
import { Message } from '../types/Message';

type Props = {
  messages: Message[];
};

export function ChatMessages({ messages }: Props) {
  return (
    <FlatList
      data={messages}
      inverted
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <MessageItem sender={item.sender} text={item.text} time={item.time} />
      )}
      contentContainerStyle={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
