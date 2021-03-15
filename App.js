import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, Image, View, Button, TouchableOpacity } from 'react-native';
import * as firebase from 'firebase';
import ApiKeys from './ApiKeys';

export default class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      isLoadingComplete: false,
    };
    if (!firebase.apps.length) { firebase.initializeApp(ApiKeys.FirebaseConfig); }
  }

  render(){

    return (
    <View style={styles.container}>
      <Text style = {styles.textStyle}>
        Welcome to Timișoara!</Text>
      <Image 
        style = {{  position: 'absolute',
                    width: 465,
                    height: 421,
                    left: 71,
                    top: 140,
                    borderRadius: 170
                }}
        source = {require("./assets/U10.jpg")}
      />

      <TouchableOpacity onPress={console.log("Bau")} style={styles.buttonContainer}>
            <Text style={{textAlign: 'center', fontFamily: 'Roboto', fontSize: 28, top: 0}}>Log in</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={console.log("Mau")} style={ [styles.buttonContainer, {top: 265, backgroundColor: 'white'}]}>
            <Text style={{textAlign: 'center', fontFamily: 'Roboto', fontSize: 28, top: 0}}>Create account</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
  }
  
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#1A1B29',
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonContainer: {
     top: 250,
     height: 50,
     width: 300,
     justifyContent: 'center',
     backgroundColor: '#59B298',
     borderRadius: 25,
  },

  textStyle: {
    position: 'absolute',
    width: 414,
    height: 179,
    left: 0,      
    top: 60,

    color: 'white',
    fontSize: 32,
    textAlign: 'center',
  },
});
