import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import Homescreen from './homescreen'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import location from './location';

const App = () => {
  const stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name='Home' component={Homescreen} options={{headerShown:false}} />
        <stack.Screen name='Location' component={location} options={{headerShown:true}} />
      </stack.Navigator>
    </NavigationContainer>
    
  )
}

export default App

const styles = StyleSheet.create({})