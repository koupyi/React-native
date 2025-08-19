import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';

export default function App() {
  const [label1, setLabel1] = useState("Texto original");
  const [label2, setLabel2] = useState("Texto original");

  function trocarLabel1() {
    if (label1 === "Texto original") {
      setLabel1("Texto mudado com exito");
    } else {
      setLabel1("Texto original");
    }
  }

  function trocarLabel2() {
    if (label2 === "Texto original") {
      setLabel2("Texto mudado com exito");
    } else {
      setLabel2("Texto original");
    }
  }

  return (
    <View style={styles.principal}>
      <View style={styles.container1}>
        <Text style={styles.texto}>{label1}</Text>
        <Text style={styles.texto}>{label2}</Text>
        <View style={styles.caixa1}>
        </View>
        <View style={styles.container2}>
        <Button title='Trocar label' onPress={trocarLabel1} />
        <Button style={styles.button} title='Trocar label' onPress={trocarLabel2} />
        </View>
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
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2: {
    flex: 2,
    backgroundColor: 'gray',
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
});
