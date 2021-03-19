import { Text, View, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import React from 'react';
import * as firebase from 'firebase';

export default class LoginScreen extends React.Component{
    
    constructor(props){
        super(props)

        this.state = ({
            //username: '',
            email: '',
            password: ''
        })
    }

    loginUser = (email, password) => {
        try{
            
            firebase.auth().signInWithEmailAndPassword(email,password);/*.then(function (user){
                console.log(user);
                console.log(user.email)
            })*/
             

        }catch(error){
            //console.log(error.toString())
            //alert("Error:",error)
           firebase.auth().onAuthStateChanged(user => {alert(user.email)});
        }
    }

    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.loginText}>Log in</Text>

                <View>
                    <TouchableOpacity style={styles.facebookButton}>
                        <View>
                            <Text style={{fontSize: 36, fontWeight: "bold", color: 'white', left: 20}}>f</Text>
                        </View>
                        <View>
                            <Text style={styles.facebookText}>Facebook</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            
                <Text style={{ color:'white', fontSize: 18, alignSelf: 'center', top: 110}}>or log in with email</Text>

                <TextInput onChangeText={(email) => this.setState({email})} placeholder="Email" style={styles.textInput}></TextInput>
                <TextInput onChangeText={(password) => this.setState({password})} placeholder="Password" secureTextEntry={true} style={[styles.textInput, {top: 150}]}></TextInput>

                <TouchableOpacity onPress={() => this.loginUser(this.state.email, this.state.password)} style={styles.loginButton}>
                    <Text style={{color: 'white', fontSize: 26, textAlign: 'center', top: 12}}>Log in</Text>
                </TouchableOpacity>

                <Text style={{color: 'white', fontSize: 18, textAlign: 'center', top: 240}}>Don't have an account?</Text>

                <TouchableOpacity onPress={() => this.props.navigation.navigate('Signup')} style={styles.signupButton}>
                    <Text style={{color: 'black', fontSize: 22, textAlign: 'center', top: 8}}>Sign up</Text>
                </TouchableOpacity>

            </View>
        ); 
    }
      
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
        top: -35
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