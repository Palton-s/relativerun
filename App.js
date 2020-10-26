import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from'@react-navigation/native';
import Home from './src';

export default function App(){
  return (
    <NavigationContainer>
      <Home/>
    </NavigationContainer>
  )
  
}