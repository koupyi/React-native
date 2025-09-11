import react from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <FontAwesome name="rocket" size={30} color="#900" />
      <father name="rocket" size={30} color="#009" />

      <touchableOpacity styles={styles.btn} onPress={mostrarMsg}>
      <father name="cpu" size={30} color="#009" />

      <text styles={styles.btnTexto}>
        Pressione aqui
      </text>

      </touchableOpacity>

      <Text>Open up App.js to start working on your app!</Text>


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

  btn: {
    backgroundColor: '#00f',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    margin: 20,
    borderWidth: 3,
  },

  btnTexto: {
    color: '#fff',
    fontSize: 20,
    marginLeft: 10,
  fontWeight: 'bold',
  }
});
