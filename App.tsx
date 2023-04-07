/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import Test from './app/screens/test';
import LoginScreen from './app/screens/LoginScreen';
import HomeScreen from './app/screens/HomeScreen';
import RewardScreen from './app/screens/RewardScreen';
import MainContainer from './app/screens/MainContainer';
import Test2 from './app/screens/test2'
import {NavigationContainer} from '@react-navigation/native';
import Influencing_tree from './app/screens/influencing_tree';

import {Text, View} from 'react-native';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <MainContainer/>
   </NavigationContainer>
  // <Influencing_tree/>

  );
}

export default App;
