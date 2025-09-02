import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [mensagem, setMensagem] = useState('Hello world');

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{mensagem}</Text>
      <Button title="Change Message" onPress={() => setMensagem('Texto alterado')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    color: '#333',
  },
});
