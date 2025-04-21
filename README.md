# 📱 ChatApp

Um app simples de chat construído em **React Native com Expo** para exercitar o entendimento sobre o uso de `useState` e `FlatList`.

---

## 🚀 Funcionalidades

- Digitar seu nome de usuário e entrar no Chat.
- Visualizar a mensagem sendo digitada em tempo real no Chat.
- Clique em **Enviar** para adicionar definitivamente a mensagem ao Chat e escrever uma nova mensagem.
- As mensagens são listadas com **nome de usuário** e **hora de envio**.
- Interface básica adaptada para Android Emulator.

---

## 📦 Tecnologias

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [TypeScript](https://www.typescriptlang.org/)

---

## 🧪 Como rodar o projeto

```bash
git clone https://github.com/seu-usuario/ChatApp.git
cd ChatApp

npm install

npx expo run:android

❗ Outros comandos que podem ser úteis

emulator -avs 'Nome_Do_Seu_Dispositivo' : Exemplo: emulator -avd Pixel_4a - Executar um emulador instalado localmente.
adb devices : Lista os dispositivos conectados.
adb logcat : Mostra logs do dispositivo. Foi útil quando o device aqui utilizado estava com tela preta e não logava nenhum erro no terminal.
