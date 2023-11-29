import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { ImageBackground } from 'react-native';

const CorrespondenciasPage = () => {
  const [correspondencias, setCorrespondencias] = useState([]);
  const [novaCorrespondencia, setNovaCorrespondencia] = useState('');
  const [excluirIndex, setExcluirIndex] = useState(null);

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

  const solicitarExclusao = (index) => {
    setExcluirIndex(index);
  };

  const cancelarExclusao = () => { 
    setExcluirIndex(null);
  };

  const confirmarExclusao = () => {
    const novasCorrespondencias = correspondencias.filter((_, i) => i !== excluirIndex);
    setCorrespondencias(novasCorrespondencias);
    setExcluirIndex(null);
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
            placeholder="Digite aqui"
            placeholderTextColor="#999"
          />
          {excluirIndex === index ? (
            <View style={styles.confirmationContainer}>
              <Text style={styles.confirmationText}>Tem certeza?</Text>
              <TouchableOpacity style={styles.confirmButton} onPress={confirmarExclusao}>
                <Text style={styles.buttonText}>Confirmar</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.cancelButton} onPress={cancelarExclusao}>
                <Text style={styles.buttonText}>Cancelar</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <TouchableOpacity style={styles.deleteButton} onPress={() => solicitarExclusao(index)}>
              <Text style={styles.buttonText}>Excluir</Text>
            </TouchableOpacity>
          )}
        </View>
      ))}
      <TextInput
        style={[styles.input, styles.newInput]}
        value={novaCorrespondencia}
        onChangeText={(texto) => setNovaCorrespondencia(texto)}
        placeholder="Nova correspondência"
        placeholderTextColor="#999"
      />
      <TouchableOpacity style={styles.addButton} onPress={adicionarCorrespondencia}>
        <Text style={[styles.buttonText, { color: '#fff' }]}>Adicionar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  correspondenciaContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderWidth: 2,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginRight: 10,
    backgroundColor: '#fff',
    color: '#333',
  },
  newInput: {
    marginTop: 10,
  },
  confirmationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  confirmationText: {
    marginRight: 20,
    color: '#333',
  },
  deleteButton: {
    backgroundColor: '#ff3333',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
  },
  confirmButton: {
    backgroundColor: '#33cc33',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
    marginRight: 10,
  },
  cancelButton: {
    backgroundColor: '#ccc',
    paddingVertical: 7,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  addButton: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default CorrespondenciasPage;