import React, { useReducer, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import styles from './Chat.styles';

type Message = {
  id: string;
  sender: string;
  text: string;
  time: string;
};

export default function Chat() {
  const [userName, setUserName] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);

  const handleLogin = () => {
    if (userName.trim()) {
      setIsLoggedIn(true);
    } else {
      alert('Digite um nome válido.');
    }
  };

  const handleSendMessage = () => {
    if (message.trim()) {
      const newMessage: Message = {
        id: Date.now().toString(),
        sender: userName,
        text: message,
        time: new Date().toLocaleTimeString(),
      };
      setMessages((prevMessages) => [newMessage, ...prevMessages]);
      setMessage('');
    } else {
      alert('Digite uma mensagem.');
    }
  };

  const renderedMessages = message
    ? [{ id: 'temp', sender: userName, text: message, time: '' }, ...messages]
    : messages;

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.select({ ios: 'padding', android: undefined })}
    >

      {!isLoggedIn ? (
        <View style={styles.loginContainer}>
          <Text style={styles.title}>Digite o seu nome para entrar</Text>
          <TextInput
            style={styles.input}
            placeholder="Nome"
            value={userName}
            onChangeText={setUserName}
          />

          <Button title="Enviar" onPress={handleLogin} />
        </View>
      ) : (
        <View style={styles.chatContainer}>
          <FlatList
            data={renderedMessages}
            inverted
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.message}>
                <Text style={styles.meta}>{item.sender} - {item.time}</Text>
                <Text>{item.text}</Text>
              </View>
            )}
            contentContainerStyle={styles.messageList}
          />

          <View style={styles.inputArea}>
            <TextInput
              style={styles.messageInput}
              placeholder="Digite sua mensagem"
              value={message}
              onChangeText={setMessage}
            />
            
            <Button title="Enviar" onPress={handleSendMessage} />
          </View>
        </View>
      )}
    </KeyboardAvoidingView>
  );
}
