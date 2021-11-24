import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import firebase from './src/pages/firebaseConnect';


import Home from './src/pages/Home';
import Login from './src/pages/Login';
import Registro from './src/pages/Registro';
import Inicio from './src/pages/Inicio';

console.disableYellowBox = true;

export default function App() {

  const Stack = createNativeStackNavigator();

  return (

    <NavigationContainer>

      <Stack.Navigator>

        <Stack.Screen 
        name="Home"
        component={Home} 
        options={{
          headerShown: false
        }}
        />

        <Stack.Screen 
        name="Login"
        component={Login}
        options={{
          headerShown: false
        }}
        />

        <Stack.Screen 
        name="Registro"
        component={Registro}
        options={{
          headerShown: false
        }}
        />

        <Stack.Screen 
        name="Inicio"
        component={Inicio}
        options={{
          headerShown: false
        }}
        />


      </Stack.Navigator>

    </NavigationContainer>

  );

  
  
}


