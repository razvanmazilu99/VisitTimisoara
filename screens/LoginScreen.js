import { Text, View, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import React from 'react';

export default function LoginScreen({ navigation }){
    return(
        <View style={styles.container}>
            <Text style={styles.loginText}>Log in</Text>

            <View style={{flex: 0.1, flexDirection: 'row'}}>
                <TouchableOpacity style={styles.facebookButton}>
                    <View style={{flex: 0.025}}>
                        <Text style={{fontSize: 36, fontWeight: "bold", color: 'white', left: 20}}>f</Text>
                    </View>
                    <View style={{flex: 0.075}}>
                        <Text style={styles.facebookText}>Facebook</Text>
                    </View>
                </TouchableOpacity>
            </View>
            
            <Text style={{ color:'white', fontSize: 18, alignSelf: 'center', top: 110}}>or log in with email</Text>

            <TextInput placeholder="Email" style={styles.textInput}></TextInput>
            <TextInput placeholder="Password" secureTextEntry={true} style={[styles.textInput, {top: 150}]}></TextInput>

            <TouchableOpacity style={styles.loginButton}>
                <Text style={{color: 'white', fontSize: 26, textAlign: 'center', top: 12}}>Log in</Text>
            </TouchableOpacity>

            <Text style={{color: 'white', fontSize: 18, textAlign: 'center', top: 240}}>Don't have an account?</Text>

            <TouchableOpacity onPress={() => navigation.navigate('Signup')} style={styles.signupButton}>
                <Text style={{color: 'black', fontSize: 22, textAlign: 'center', top: 8}}>Sign up</Text>
            </TouchableOpacity>

        </View>
    );   
}

const styles = StyleSheet.create({
    
    container: {
        flex: 1,
        backgroundColor: '#1A1B29',
        alignItems: 'center',
    },

    loginText: {
        top: 58,
        color: 'white',
        fontSize: 48,
    },
    
    facebookButton: {
        backgroundColor: '#3552B8',
        borderRadius: 20,
        width: 152,
        height: 46,
        top: 90
    },

    facebookText: {
        color: 'white',
        fontSize: 18,
        left: 50,
        top: 10
    },

    textInput: {
        backgroundColor: 'white',
        borderRadius: 20,
        width: 337,
        height: 61,
        top: 130,
        fontSize: 26,
        paddingLeft: 25
    },

    loginButton: {
        backgroundColor: "#59B398",
        width: 337,
        height: 61,
        borderRadius: 20,
        top: 200
    },

    signupButton: {
        width: 257,
        height: 46,
        borderRadius: 20,
        backgroundColor: 'white',
        top: 260
    }
});