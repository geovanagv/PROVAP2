import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { ImageBackground } from 'react-native';
import { Correspondencias } from "./Correspondencias";
import{ Reservas} from "./Reservas";
import {Autorizacoes} from "./Autorizacoes"
import {Animaldeestimacao} from "./Animaldeestimacao";
import {Automoveis} from "./Automoveis";


const IndexScreen = ({ navigation }) => {
  return (
    <ImageBackground
      source={require('../assets/predio.jpg')}
      style={styles.background}
    >
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Correspondencias')}>
          <Text style={styles.buttonText}>Correspondências</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Reservas')}>
          <Text style={styles.buttonText}>Reservas</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Autorizacoes')}>
          <Text style={styles.buttonText}>Autorizações</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Animaldeestimacao')}>
          <Text style={styles.buttonText}>Animal de Estimação</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Automoveis')}>
          <Text style={styles.buttonText}>Automóveis</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  button: {
    backgroundColor: '#ffff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'black',
    fontSize: 20,
  },
});

export default IndexScreen;