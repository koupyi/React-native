import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';

export default function App() {
  const [imagem, setImagem] = useState(require('./src/pig.png'));

  function trocarImagem() {
    if (imagem === require('./src/pig.png')) {
      setImagem(require('./src/galinha.jpg'));
    } else {
      setImagem(require('./src/pig.png'));
    }
  }

  return (
    <View style={styles.principal}>
      <View style={styles.container1}>
        <Text style={styles.texto}>Exemplo do view principal</Text>
        <View style={styles.caixa1}>
          <TextInput placeholder='Digite algo aqui' />
        </View>
        <Button title='Trocar Imagem' onPress={trocarImagem} />
      </View>

      <View style={styles.container2}>
        <Image source={imagem} style={styles.Img} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  principal: {
    flex: 1,
  },
  container1: {
    flex: 1,
    backgroundColor: '#f00',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2: {
    flex: 2,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    fontSize: 20,
    color: '#000',
    fontWeight: 'bold',
    margin: 20,
    textAlign: 'center',
  },
  caixa1: {
    height: 100,
    backgroundColor: '#ccc',
    borderColor: '#000',
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
    borderBottomEndRadius: 30,
    borderTopLeftRadius: 10,
  },
  Img: {
    width: 2000,
    height: 2000,
    borderRadius: 100,
    margin: 20,
  }
});
