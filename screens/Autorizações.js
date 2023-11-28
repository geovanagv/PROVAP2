// MoradorScreen.js

import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const MoradorScreen = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');

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
          } catch (error) {
            console.error('Erro ao salvar morador:', error);
          }
        };
      
        return (
          <View>
            <TextInput
              placeholder="Nome"
              value={nome}
              onChangeText={(text) => setNome(text)}
            />
            <TextInput
              placeholder="Email"
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
            <Button title="Salvar Morador" onPress={salvarMorador} />
          </View>
        );
      };
      
      export default MoradorScreen;
      
