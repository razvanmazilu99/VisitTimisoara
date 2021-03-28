import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, Image, View, Button, TouchableOpacity } from 'react-native';

export default function WelcomeScreen({ navigation }){
    return (
        <View style={styles.container}>
          <StatusBar style="auto" barStyle='light-content'/>
          <Text style = {styles.textStyle}>
            Welcome to Timișoara!
          </Text>
          <Image 
            style = {{  position: 'absolute',
                        width: 465,
                        height: 421,
                        left: 71,
                        top: 130,
                        borderRadius: 170
                    }}
            source = {require("../assets/U10.jpg")}
          />
    
          <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.buttonContainer}>
                <Text style={{textAlign: 'center', fontSize: 28, top: 0}}>Log in</Text>
          </TouchableOpacity>
    
          <TouchableOpacity onPress={() => navigation.navigate('Signup')} style={ [styles.buttonContainer, {top: 265, backgroundColor: 'white'}]}>
                <Text style={{textAlign: 'center', fontSize: 28, top: 0}}>Create account</Text>
          </TouchableOpacity>
        </View>
        
      );
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
        //left: -14,      
        top: 60,
    
        color: 'white',
        fontSize: 32,
        textAlign: 'center',
    },
});
