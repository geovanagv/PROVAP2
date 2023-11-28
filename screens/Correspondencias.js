import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const CorrespondenciasPage = () => {
  const [correspondencias, setCorrespondencias] = useState([]);
  const [novaCorrespondencia, setNovaCorrespondencia] = useState('');

  const adicionarCorrespondencia = () => {
    if (novaCorrespondencia.trim() !== '') {
      const novaListaCorrespondencias = [...correspondencias, novaCorrespondencia];
      setCorrespondencias(novaListaCorrespondencias);
      setNovaCorrespondencia('');
    }
  };

  const editarCorrespondencia = (index, texto) => {
    const novasCorrespondencias = [...correspondencias];
    novasCorrespondencias[index] = texto;
    setCorrespondencias(novasCorrespondencias);
  };

  const excluirCorrespondencia = (index) => {
    const novasCorrespondencias = correspondencias.filter((_, i) => i !== index);
    setCorrespondencias(novasCorrespondencias);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Correspondências:</Text>
      {correspondencias.map((correspondencia, index) => (
        <View key={index} style={styles.correspondenciaContainer}>
          <TextInput
            style={styles.input}
            value={correspondencia}
            onChangeText={(texto) => editarCorrespondencia(index, texto)}
          />
          <Button title="Excluir" onPress={() => excluirCorrespondencia(index)} />
        </View>
      ))}
      <TextInput
        style={styles.input}
        value={novaCorrespondencia}
        onChangeText={(texto) => setNovaCorrespondencia(texto)}
        placeholder="Nova correspondência"
      />
      <Button title="Adicionar" onPress={adicionarCorrespondencia} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  correspondenciaContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginRight: 10,
  },
});

export default CorrespondenciasPage;
