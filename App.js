import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TodoListScreen from './src/screens/TodoListScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Randy Ivando" component={TodoListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
