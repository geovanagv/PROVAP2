import React, { useState } from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import { Input } from 'react-native-elements';

const CadastroAnimalScreen = () => {
  const [animal, setAnimal] = useState(null);
  const [editMode, setEditMode] = useState(false);

  const handleSubmit = (values) => {
    setAnimal(values);
    setEditMode(false);
    console.log('Animal cadastrado:', values);
  };

  const handleEdit = () => {
    setEditMode(true);
    console.log('Editar animal:', animal);
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Formik
          initialValues={{ nome: '', especie: '', raca: '', idade: '' }}
          onSubmit={handleSubmit}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <View style={styles.inputContainer}>
              <Input
                placeholder="Nome do Animal"
                onChangeText={handleChange('nome')}
                onBlur={handleBlur('nome')}
                value={values.nome}
              />
              <Input
                placeholder="Espécie"
                onChangeText={handleChange('especie')}
                onBlur={handleBlur('especie')}
                value={values.especie}
              />
              <Input
                placeholder="Raça"
                onChangeText={handleChange('raca')}
                onBlur={handleBlur('raca')}
                value={values.raca}
              />
              <Input
                placeholder="Idade"
                onChangeText={handleChange('idade')}
                onBlur={handleBlur('idade')}
                value={values.idade}
              />
              <Button title="Cadastrar" onPress={handleSubmit} />
            </View>
          )}
        </Formik>
      </View>

      {animal && (
        <View style={styles.detailsContainer}>
          {editMode ? (
            <View style={styles.editModeContainer}>
              <Text style={styles.editModeText}>Editar Animal:</Text>
              <Input
                placeholder="Nome do Animal"
                onChangeText={(value) => setAnimal({ ...animal, nome: value })}
                value={animal.nome}
              />
              <Input
                placeholder="Espécie"
                onChangeText={(value) => setAnimal({ ...animal, especie: value })}
                value={animal.especie}
              />
              <Input
                placeholder="Raça"
                onChangeText={(value) => setAnimal({ ...animal, raca: value })}
                value={animal.raca}
              />
              <Input
                placeholder="Idade"
                onChangeText={(value) => setAnimal({ ...animal, idade: value })}
                value={animal.idade}
              />
              <Button title="Salvar" onPress={() => setEditMode(false)} />
            </View>
          ) : (
            <View style={styles.detailsModeContainer}>
              <Text style={styles.detailsModeText}>Detalhes do Animal:</Text>
              <Text>Nome: {animal.nome}</Text>
              <Text>Espécie: {animal.especie}</Text>
              <Text>Raça: {animal.raca}</Text>
              <Text>Idade: {animal.idade}</Text>
              <Button title="Editar" onPress={handleEdit} />
            </View>
          )}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    width: '80%',
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 10,
  },
  detailsContainer: {
    marginTop: 20,
    borderWidth: 1,
    padding: 10,
  },
  editModeContainer: {
    marginBottom: 10,
  },
  detailsModeContainer: {
    marginBottom: 10,
  },
  editModeText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },  
  detailsModeText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default CadastroAnimalScreen;