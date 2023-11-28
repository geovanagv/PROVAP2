import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const PetRegistration = () => {
  const [pets, setPets] = useState([]);
  const [name, setName] = useState('');
  const [species, setSpecies] = useState('');
  const [breed, setBreed] = useState('');
  const [age, setAge] = useState('');
  const [owner, setOwner] = useState('');

  useEffect(() => {
    // Carregar os dados do AsyncStorage ao iniciar a tela
    loadPets();
  }, []);

  const loadPets = async () => {
    try {
      const storedPets = await AsyncStorage.getItem('@pets');
      if (storedPets !== null) {
        setPets(JSON.parse(storedPets));
      }
    } catch (error) {
      console.error('Erro ao carregar os animais de estimação', error);
    }
  };

  const savePet = async () => {
    // Validação dos campos
    if (!name || !species || !breed || !age || !owner) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }

    const newPet = { name, species, breed, age, owner };
    const updatedPets = [...pets, newPet];
    
    try {
      await AsyncStorage.setItem('@pets', JSON.stringify(updatedPets));
      setPets(updatedPets);
      // Limpar os campos após o cadastro
      setName('');
      setSpecies('');
      setBreed('');
      setAge('');
      setOwner('');
      Alert.alert('Sucesso', 'Animal cadastrado com sucesso!');
    } catch (error) {
      console.error('Erro ao salvar o animal de estimação', error);
    }
  };

  const deletePet = async (index) => {
    const updatedPets = pets.filter((_, idx) => idx !== index);
    
    try {
      await AsyncStorage.setItem('@pets', JSON.stringify(updatedPets));
      setPets(updatedPets);
      Alert.alert('Sucesso', 'Animal removido com sucesso!');
    } catch (error) {
      console.error('Erro ao excluir o animal de estimação', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Cadastro de Animal de Estimação</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      {/* Aqui você pode adicionar os outros campos de entrada para espécie, raça, idade, dono */}
      <TouchableOpacity style={styles.button} onPress={savePet}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>

      <FlatList
        data={pets}
        renderItem={({ item, index }) => (
          <View style={styles.petItem}>
            <Text>{item.name}</Text>
            {/* Outras informações do animal */}
            <TouchableOpacity onPress={() => deletePet(index)}>
              <Text style={styles.deleteText}>Excluir</Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    width: '80%',
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  petItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    marginBottom: 10,
  },
  deleteText: {
    color: 'red',
  },
});

export default PetRegistration;
