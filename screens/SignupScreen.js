import React from 'react';
import firebase from '../ApiKeys';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, StatusBar } from 'react-native';

export default class SignupScreen extends React.Component{
    
    constructor(props){
        super(props)

        this.state = ({
            username: '',
            email: '',
            password: ''
        })
    }

    signUpUser = (email, password, username) => {
       try{
            if(this.state.password.length<6){
                alert("Please enter at least 6 characters")
                return;
            }

            firebase.auth().createUserWithEmailAndPassword(email,password).then(user => this.props.navigation.navigate('Login'));

        }catch(error){
            console.log(error.toString());
        }
    }
    
    render(){
        return(
            <View style={styles.container}>
                <StatusBar style="auto" barStyle="light-content" />
                <Text style={styles.registerText}>Create account</Text>
                {/*<TextInput placeholder="Username" onChangeText={(username) => this.setState({username})} style={styles.textInput}></TextInput>*/}
                <TextInput placeholder="Email" onChangeText={(email) => this.setState({email})} style={[styles.textInput, {top: 150}]}></TextInput>
                <TextInput placeholder="Password" onChangeText={(password) => this.setState({password})} secureTextEntry={true} style={[styles.textInput, {top: 170}]}></TextInput>

                <TouchableOpacity onPress={() => this.signUpUser(this.state.email, this.state.password)} style={styles.signupButton}>
                    <Text style={{color: 'white', fontSize: 26, textAlign: 'center', top: 12}}>Sign up</Text>
                </TouchableOpacity>

                <View style={{flex: 1, flexDirection: 'row'}}>
                    <View style={{flex: 0.75}}>
                        <Text style={{ color:'white', fontSize: 18, alignSelf: 'center', left: 18, top: 300}}>Already have an account?</Text>
                    </View>
                
                    <View style={{flex: 0.25}}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')} style={styles.textLogIn}>
                            <Text style={{ color:'white', fontSize: 18, alignSelf: 'center', left: -10, color: '#59B298'}}>Log in</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({

    registerText: {
        top: 80,
        color: 'white',
        fontSize: 40,
    },

    container: {
        flex: 1,
        backgroundColor: '#1A1B29',
        alignItems: 'center',
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

    textLogIn: {
        top: 300,
        left: -5,
        fontSize: 18,
        width: 60,
        height: 28
    },

    signupButton: {
        backgroundColor: "#59B398",
        width: 337,
        height: 61,
        borderRadius: 20,
        top: 230
    },

});