// IndexScreen.js

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import {Correspondencias} from "./Correspondencias";

const IndexScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Morador')}
      >
        <Text style={styles.buttonText}>Correspondências</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('ReservaEspaco')}
      >
        <Text style={styles.buttonText}>Reservas</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('ReservaEspaco')}
      >
        <Text style={styles.buttonText}>Autorizações</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('ReservaEspaco')}
      >
        <Text style={styles.buttonText}>Animais de estimação</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('ReservaEspaco')}
      >
        <Text style={styles.buttonText}>Automóveis</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  button: {
    backgroundColor: '#3498db',
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default IndexScreen;
