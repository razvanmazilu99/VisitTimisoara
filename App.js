import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, Image, View, Button, TouchableOpacity } from 'react-native';
import * as firebase from 'firebase';
import ApiKeys from './ApiKeys';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './screens/WelcomeScreen';
import { not } from 'react-native-reanimated';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';

const Stack = createStackNavigator();
export default function App()  {
  
  /*constructor(props) {
    super(props);
    this.state = {
      isLoadingComplete: false,
    };
    if (!firebase.apps.length) { firebase.initializeApp(ApiKeys.FirebaseConfig); }
  }*/

 // render(){

    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="WelcomeScreen" >
          <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Signup" component={SignupScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  
//}


