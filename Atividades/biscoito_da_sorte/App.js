import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

export default function App() {
  const [label1, setLabel1] = useState("Abra um biscoito da sorte");
  const [label2, setLabel2] = useState("Abra um biscoito da sorte");
  const [imagem, setImagem] = useState(require('./src/biscoitoFechado.webp'));
  const [imagem1] = useState(require('./src/integrantes.jpg'));
  const [display1, setDisplay1] = useState('flex');
  const [display2, setDisplay2] = useState('none');

  const frasesMotivacionais = [
    "Acredite em você e tudo será possível",
    "Você é mais forte do que imagina",
    "Cada dia é uma nova chance de recomeçar",
    "Não espere por oportunidades, crie-as",
    "O sucesso é a soma de pequenos esforços repetidos diariamente",
    "Desafios são degraus para o crescimento",
    "Seja a energia que você quer atrair",
    "Coragem não é ausência de medo, é a decisão de seguir em frente apesar dele",
    "Você não precisa ser perfeito, só precisa começar",
    "Grandes conquistas começam com pequenos passos",
    "A persistência realiza o impossível",
    "Não desista. Às vezes é a última chave do chaveiro que abre a porta",
    "Você é capaz de coisas incríveis",
    "O fracasso é apenas o tempero que dá sabor à vitória",
    "A jornada pode ser difícil, mas o destino vale a pena",
    "Transforme obstáculos em combustível para sua motivação",
    "A única limitação é aquela que você aceita",
    "Você não está atrasado, está no seu tempo",
    "A disciplina é o caminho mais curto para a liberdade",
    "Faça de cada queda um impulso para voar mais alto"
  ];

  function trocarFrase() {
    const indice = Math.floor(Math.random() * frasesMotivacionais.length);
    setLabel1(frasesMotivacionais[indice]);
    setLabel2("Abra outro biscoito da sorte");

    if (imagem === require('./src/biscoitoFechado.webp')) {
      setImagem(require('./src/biscoitoAberto.jpg'));
    } else {
      setImagem(require('./src/biscoitoFechado.webp'));
    }
  }

  function trocarLabel2() {
    if (label2 === "Abra um biscoito da sorte") {
      setLabel2("Label trocado com sucesso");
    } else {
      setLabel2("Abra um biscoito da sorte");
    }
  }

  function alternarTelas() {
    setDisplay1(display1 === 'flex' ? 'none' : 'flex');
    setDisplay2(display2 === 'flex' ? 'none' : 'flex');
  }

  return (
    <View style={styles.principal}>
      <View style={{ display: display1 }}>
        <View style={styles.caixa1}>
          <Image source={imagem} style={styles.Img} />
          <Text style={styles.texto}>{label1}</Text>
        </View>
        <View style={styles.botoes}>
          <View style={styles.button}>
            <Button title={label2} onPress={trocarFrase} />
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
