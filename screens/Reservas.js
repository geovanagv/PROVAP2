// ReservaEspacoScreen.js

import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ReservaEspacoScreen = () => {
  const [tipoEspaco, setTipoEspaco] = useState('');
  const [dataReserva, setDataReserva] = useState('');

  const reservarEspaco = async () => {
    try {
      // Validação dos campos
      if (!tipoEspaco || !dataReserva) {
        alert('Preencha todos os campos!');
        return;
      }

      // Lógica para salvar reserva no AsyncStorage
      const novaReserva = { tipoEspaco, dataReserva };
      const reservasExistentes = await AsyncStorage.getItem('reservas');
      const reservas = reservasExistentes ? JSON.parse(reservasExistentes) : [];
      reservas.push(novaReserva);
      await AsyncStorage.setItem('reservas', JSON.stringify(reservas));

      // Limpar os campos após salvar
      setTipoEspaco('');
      setDataReserva('');

      alert('Reserva realizada com sucesso!');
    } catch (error) {
      console.error('Erro ao realizar reserva:', error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Tipo de Espaço (Churrasqueira, Salão de Festas, etc)"
        value={tipoEspaco}
        onChangeText={(text) => setTipoEspaco(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Data da Reserva"
        value={dataReserva}
        onChangeText={(text) => setDataReserva(text)}
      />
      <Button title="Reservar Espaço" onPress={reservarEspaco} />
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(5, 5, 5, 0.2)', // Opacidade para melhorar a legibilidade do texto
  },
  input: {
    width: '95%',
    height: 75,
    marginBottom: 35,
    paddingHorizontal: 25,
    borderRadius: 15,
    borderWidth: 3,
    borderColor: '#3498db',
    backgroundColor: '#ffff', // Cor de fundo com opacidade para destacar sobre a imagem
  },
});

export default ReservaEspacoScreen;
