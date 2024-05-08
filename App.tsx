import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailsScreen from './DetailsScreen';
import HomeScreen from './HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import Mainscreen from './Mainscreen';
import Header from './src/Header';
import Real from './src/Real'

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName='Mainscreen'>
    <Stack.Screen options={{headerShown:false}} name='HomeScreen' component={HomeScreen}/>
      <Stack.Screen options={{headerShown:false}} name='DetailsScreen' component={DetailsScreen}/>
      <Stack.Screen options={{headerShown:false}} name='Mainscreen' component={Mainscreen}/>
      <Stack.Screen options={{headerShown:false}} name='Header' component={Header}/>
      <Stack.Screen options={{headerShown:false}} name='Real' component={Real}/>

      

    </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
