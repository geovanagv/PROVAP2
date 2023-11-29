// App.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import index from './screens/index';
import Correspondencias from './screens/Correspondencias';
import Reservas from './screens/Reservas';
import Autorizacoes from './screens/Autorizacoes';
import Animaldeestimacao from './screens/Animaldeestimacao';
import Automoveis from './screens/Automoveis';

const Stack = createStackNavigator();
  
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="index">
        <Stack.Screen name="Allegro" component={index} />
        <Stack.Screen name="Correspondencias" component={Correspondencias} />
        <Stack.Screen name="Reservas" component={Reservas} />
        <Stack.Screen name="Autorizacoes" component={Autorizacoes} />
        <Stack.Screen name="Animaldeestimacao" component={Animaldeestimacao} />
        <Stack.Screen name="Automoveis" component={Automoveis} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;