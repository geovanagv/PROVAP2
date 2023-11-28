// App.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import index from './screens/index';
import Correspondencias from './screens/Correspondencias';
import Reservas from './screens/Reservas';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Index">
        <Stack.Screen name="index" component={index} />
        <Stack.Screen name="Correspondencias" component={Correspondencias} />
        <Stack.Screen name="Reservas" component={Reservas} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
