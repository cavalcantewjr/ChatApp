// Anotação: Este arquivo é o componente principal do aplicativo de bate-papo. Ele gerencia o estado do nome de usuário, mensagens e valida se o usuário está logado ou não para assim então usar o chat de mensagens.
// Ele usa o hook useState do React para gerenciar esses estados e renderiza o componente de login ou a interface de bate-papo com mensagens e campo de entrada de mensagem, dependendo do estado de login do usuário(se for true).
// O componente também define uma função para enviar mensagens, que cria um novo objeto de mensagem e atualiza o estado das mensagens. O estilo é aplicado usando StyleSheet do React Native.


import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Login } from '../Login';
import { ChatMessages } from '../ChatMessages';
import { MessageInput } from '../MessageInput';
import { Message } from '../../types/Message';

export function Chat() {
  const [username, setUsername] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);

  const handleSendMessage = () => {
    if (message.trim() === '') return;

    const newMessage: Message = {
      id: Date.now().toString(),
      sender: username,
      text: message,
      time: new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      }),
    };

    setMessages((prev) => [newMessage, ...prev]);
    setMessage('');
  };

  if (!isLoggedIn) {
    return (
      <Login
        username={username}
        onChangeUsername={setUsername}
        onLogin={() => setIsLoggedIn(true)}
      />
    );
  }

  return (
    <View style={styles.container}>
      <ChatMessages messages={messages} />
      <MessageInput
        value={message}
        onChange={setMessage}
        onSend={handleSendMessage}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
