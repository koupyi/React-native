import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

export default function App() {
  // Lista de prêmios com nome + imagem
  const premios = [
    { nome: "Jaré", imagem: require("./src/jaré.jpg") },
    { nome: "Opala", imagem: require("./src/opala.webp") },
    { nome: "Pirulito", imagem: require("./src/piru.webp") },
    { nome: "Turbina", imagem: require("./src/turbina.jpg") },
    { nome: "TV", imagem: require("./src/tv.webp") },
  ];

  const [label1, setLabel1] = useState("Descubra seu prêmio");
  const [label2, setLabel2] = useState("Clique para sortear");
  const [premioAtual, setPremioAtual] = useState(null);
  const [imagem1] = useState(require('./src/integrantes.jpg'));
  const [display1, setDisplay1] = useState('flex');
  const [display2, setDisplay2] = useState('none');

  function trocarImagem() {
    const indice = Math.floor(Math.random() * premios.length);
    const sorteado = premios[indice];
    setPremioAtual(sorteado);

    setLabel1("Prêmio revelado!");
    setLabel2(`Você ganhou: ${sorteado.nome}`);
  }

  function alternarTelas() {
    setDisplay1(display1 === 'flex' ? 'none' : 'flex');
    setDisplay2(display2 === 'flex' ? 'none' : 'flex');
  }

  return (
    <View style={styles.principal}>
      <View style={{ display: display1 }}>
        <View style={styles.caixa1}>
          {premioAtual && <Image source={premioAtual.imagem} style={styles.Img} />}
          <Text style={styles.texto}>{label1}</Text>
          {premioAtual && <Text style={styles.texto}>{premioAtual.nome}</Text>}
        </View>
        <View style={styles.botoes}>
          <View style={styles.button}>
            <Button title={label2} onPress={trocarImagem} />
          </View>
          <View style={styles.button}>
            <Button title='Ir para integrantes' onPress={alternarTelas} />
          </View>
        </View>
      </View>

      <View style={{ display: display2 }}>
        <Image source={imagem1} style={styles.caixa2} />
        <View style={styles.button}>
          <Button title='Ir para tela principal' onPress={alternarTelas} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  principal: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  caixa1: {
    height: 350,
    backgroundColor: '#ccc',
    borderColor: '#000',
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
    borderBottomEndRadius: 30,
    borderTopLeftRadius: 10,
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',
    top: -30,
  },
  caixa2: {
    height: 250,
    backgroundColor: '#ccc',
    borderColor: '#000',
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
    borderBottomEndRadius: 30,
    borderTopLeftRadius: 10,
    width: 700,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Img: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  texto: {
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center',
  },
  botoes: {
    marginTop: 20,
    alignItems: 'center',
  },
  button: {
    marginVertical: 10,
    width: 250,
  },
});
