// MoradorScreen.js

import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, StyleSheet, Text, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const MoradorScreen = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [moradoresSalvos, setMoradoresSalvos] = useState([]);

  useEffect(() => {
    carregarMoradoresSalvos();
  }, []);

  const carregarMoradoresSalvos = async () => {
    try {
      const moradoresExistentes = await AsyncStorage.getItem('moradores');
      if (moradoresExistentes) {
        const moradores = JSON.parse(moradoresExistentes);
        setMoradoresSalvos(moradores);
      }
    } catch (error) {
      console.error('Erro ao carregar moradores:', error);
    }
  };

  const salvarMorador = async () => {
    try {
      // Validação dos campos
      if (!nome || !email) {
        alert('Preencha todos os campos!');
        return;
      }

      // Lógica para salvar no AsyncStorage
      const novoMorador = { nome, email };
      const moradoresExistentes = await AsyncStorage.getItem('moradores');
      const moradores = moradoresExistentes ? JSON.parse(moradoresExistentes) : [];
      moradores.push(novoMorador);
      await AsyncStorage.setItem('moradores', JSON.stringify(moradores));

      // Limpar os campos após salvar
      setNome('');
      setEmail('');

      alert('Morador salvo com sucesso!');
      carregarMoradoresSalvos();
    } catch (error) {
      console.error('Erro ao salvar morador:', error);
    }
  };

  const editarMorador = async (index) => {
    // Implementar a lógica para edição do morador com o índice fornecido
    // Por exemplo, você pode abrir um modal ou navegar para outra tela para editar o morador
    // Aqui está um exemplo simples de alerta para fins de demonstração:
    alert(`Editar morador ${moradoresSalvos[index].nome}`);
  };

  const excluirMorador = async (index) => {
    try {
      const moradoresAtualizados = moradoresSalvos.filter((_, idx) => idx !== index);
      await AsyncStorage.setItem('moradores', JSON.stringify(moradoresAtualizados));
      setMoradoresSalvos(moradoresAtualizados);
      alert('Morador excluído com sucesso!');
    } catch (error) {
      console.error('Erro ao excluir morador:', error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome"
          value={nome}
          onChangeText={(text) => setNome(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Button title="Salvar Morador" onPress={salvarMorador} />
      </View>
      <View style={styles.moradoresSalvos}>
        <Text style={styles.title}>Moradores Salvos:</Text>
        {moradoresSalvos.map((morador, index) => (
          <View key={index} style={styles.morador}>
            <Text>Nome: {morador.nome}</Text>
            <Text>Email: {morador.email}</Text>
            <View style={styles.buttonsContainer}>
              <TouchableOpacity
                style={styles.editButton}
                onPress={() => editarMorador(index)}
              >
                <Text style={styles.buttonText}>Editar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.deleteButton}
                onPress={() => excluirMorador(index)}
              >
                <Text style={styles.buttonText}>Excluir</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  form: {
    width: '100%',
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: '100%',
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  moradoresSalvos: {
    width: '100%',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  morador: {
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 8,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  editButton: {
    backgroundColor: 'blue',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  deleteButton: {
    backgroundColor: 'red',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default MoradorScreen;
