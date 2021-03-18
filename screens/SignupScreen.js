import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';

export default function SignupScreen({ navigation }){
    return(
        <View style={styles.container}>
            <Text style={styles.registerText}>Create account</Text>
            <TextInput placeholder="Username" style={styles.textInput}></TextInput>
            <TextInput placeholder="Email" style={[styles.textInput, {top: 150}]}></TextInput>
            <TextInput placeholder="Password" secureTextEntry={true} style={[styles.textInput, {top: 170}]}></TextInput>

            <TouchableOpacity style={styles.signupButton}>
                <Text style={{color: 'white', fontSize: 26, textAlign: 'center', top: 12}}>Sign up</Text>
            </TouchableOpacity>

            <View style={{flex: 1, flexDirection: 'row'}}>
                <View style={{flex: 0.75}}>
                    <Text style={{ color:'white', fontSize: 18, alignSelf: 'center', left: 18, top: 300}}>Already have an account?</Text>
                </View>
                
                <View style={{flex: 0.25}}>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.textLogIn}>
                        <Text style={{ color:'white', fontSize: 18, alignSelf: 'center', left: -10, color: '#59B298'}}>Log in</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    );
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