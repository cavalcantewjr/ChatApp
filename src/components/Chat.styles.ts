import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: { flex: 1 },
  loginContainer: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  title: { fontSize: 18, marginBottom: 10, textAlign: "center" },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonContainer: { marginTop: 10 },
  chatContainer: { flex: 1, padding: 10 },
  messageList: {
    padding: 10,
  },
  message: {
    backgroundColor: '#eee',
    borderRadius: 6,
    padding: 10,
    marginBottom: 8,
  },
  meta: {
    fontSize: 12,
    color: '#666',
  },
  inputArea: {
    flexDirection: 'row',
    padding: 10,
    borderTopWidth: 1,
    borderColor: '#ccc',
    alignItems: 'center',
  },
  messageInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    padding: 10,
    marginRight: 10,
  },
});

export default styles;

