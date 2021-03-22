import React from 'react';
import { StyleSheet, Text, Image, View, Button, TouchableOpacity } from 'react-native';
import * as firebase from 'firebase';
import ApiKeys from './ApiKeys';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './screens/WelcomeScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import MainScreen from './screens/MainScreen';
//import NavBar from './screens/NavBar';
import MapScreen from './screens/MapScreen';


const Stack = createStackNavigator();
export default class App extends React.Component{
  
  constructor(props) {
    super(props);
    this.state = {
      isLoadingComplete: false,
    };
    if (!firebase.apps.length) { firebase.initializeApp(ApiKeys.FirebaseConfig); }
  }

  render(){

    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="WelcomeScreen" >
          <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Signup" component={SignupScreen} />
          <Stack.Screen name="Main" component={MainScreen} />
          {/*<Stack.Screen name="Nav" component={NavBar} />*/}
          <Stack.Screen name="Map" component={MapScreen} />
          
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  
}


