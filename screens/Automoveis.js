import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import MaskedInput from 'react-native-masked-text';

const CarManagement = () => {
  const [cars, setCars] = useState([]);
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [editCarId, setEditCarId] = useState(null);

  useEffect(() => {
    // Lógica para buscar os carros cadastrados (AsyncStorage ou backend)
    // Atualizar o estado "cars" com os dados
    // Exemplo de preenchimento inicial para testes:
    setCars([
      { id: 1, brand: 'Toyota', model: 'Corolla' },
      { id: 2, brand: 'Honda', model: 'Civic' },
      // ... outros carros
    ]);
  }, []);

  const handleAddCar = () => {
    // Lógica para adicionar um novo carro à lista
    // Usando brand e model, com validação se necessário
    const newCar = {
      id: Date.now(), // Geração de um ID único (pode ser diferente em uma implementação real)
      brand: brand,
      model: model,
    };

    setCars([...cars, newCar]);
    setBrand('');
    setModel('');
  };

  const handleEditCar = () => {
    // Lógica para editar os dados do carro com ID "editCarId"
    const updatedCars = cars.map((car) => {
      if (car.id === editCarId) {
        return {
          ...car,
          brand: brand,
          model: model,
        };
      }
      return car;
    });

    setCars(updatedCars);
    setEditMode(false);
    setEditCarId(null);
    setBrand('');
    setModel('');
  };

  const handleDeleteCar = (id) => {
    // Lógica para excluir o carro com ID "id" da lista
    const updatedCars = cars.filter((car) => car.id !== id);
    setCars(updatedCars);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.carItem}
      onPress={() => {
        setEditMode(true);
        setEditCarId(item.id);
        setBrand(item.brand);
        setModel(item.model);
      }}
    >
      <Text style={styles.carText}>{item.brand} - {item.model}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Listagem de Carros:</Text>
      <FlatList
        style={styles.list}
        data={cars}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />

      {editMode ? (
        <View style={styles.formContainer}>
          <Text style={styles.formHeading}>Editar Carro:</Text>
          <TextInput
            style={styles.input}
            value={brand}
            onChangeText={(text) => setBrand(text)}
            placeholder="Marca"
          />
          <TextInput
            style={styles.input}
            value={model}
            onChangeText={(text) => setModel(text)}
            placeholder="Modelo"
          />
          <Button title="Salvar" onPress={handleEditCar} />
        </View>
      ) : (
        <View style={styles.formContainer}>
          <Text style={styles.formHeading}>Adicionar Carro:</Text>
          <TextInput
            style={styles.input}
            placeholder="Marca"
            value={brand}
            onChangeText={(text) => setBrand(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Modelo"
            value={model}
            onChangeText={(text) => setModel(text)}
          />
          <Button title="Adicionar" onPress={handleAddCar} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  list: {
    marginBottom: 50,
  },
  carItem: {
    padding: 20,
    backgroundColor: '#f0f0f0',
    marginBottom: 20,
    borderRadius: 10,
  },
  carText: {
    fontSize: 20,
  },
  formContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 20,
    borderRadius: 10,
  },
  formHeading: {
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 10,
  }, 
  input: {
    borderWidth: 1, 
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default CarManagement;