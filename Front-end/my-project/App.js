import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {LoginDashboard} from './screens/login';
import {register} from './screens/register.js';
import {todolist} from './screens/todolist';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
      screenOptions={{
      headerShown: false
      }}>
        <Stack.Screen name="login" component={LoginDashboard} />
        <Stack.Screen name="register" component={register} />
        <Stack.Screen name="todolist" component={todolist} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
