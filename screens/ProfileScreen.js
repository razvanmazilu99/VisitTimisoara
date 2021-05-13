import React from "react";
import { DevSettings } from "react-native";
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import firebase from '../ApiKeys';

export default class ProfileScreen extends React.Component{
    
    logout = () => {
        firebase.auth().signOut().then(() => {
            DevSettings.reload();
            this.props.navigation.navigate('WelcomeScreen');
        }).catch((error) => {
            console.log(error);
        })
    }

    render(){
        var user = firebase.auth().currentUser;
        return(
            <View style={{flex: 1, backgroundColor: '#65687D'}}>
                <View style={{alignContent: 'center', flex: 0.48, height: 280, elevation: 20, backgroundColor: '#1A1B29', borderBottomLeftRadius: 25, borderBottomRightRadius: 25}}>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={styles.backButton}>
                        <Image source = {require("../assets/back.png")} style={{width: 45, height: 45, alignSelf: 'center'}}/>
                    </TouchableOpacity>
                    <Image 
                        style={{alignSelf: 'center', top: 40, width: 130, height: 130}}
                        source = {require("../assets/profile.png")} />
                    <Text style={{alignSelf: 'center', top: 60, fontSize: 24, color: 'white', fontWeight: 'bold', fontStyle: 'italic'}}>{user.displayName}</Text>
                    <Text style={{alignSelf: 'center', top: 80, fontSize: 24, color: 'white'}}>{user.email}</Text>
                </View>
            	<View style={{flex: 0.52}}>
                    <TouchableOpacity onPress={() => this.logout()} style={styles.logoutButton}>
                        <Image source = {require("../assets/log-out.png")} style={{width: 45, height: 45, left: 6, top: 2}}/>
                        <Text style={{color: 'white', fontSize: 26, textAlign: 'right', marginEnd: 5, top: -40}}>Logout</Text>
                    </TouchableOpacity>
                    <View>
                        <Image  style = {{  width: 396, height: 410, top: -60 }} source = { require('../assets/IT1.jpg') } />
                    </View>
                </View>
                
            </View>
        )
    }
}
const styles = StyleSheet.create({
    logoutButton: {
        backgroundColor: 'gray',
        opacity: 0.7,
        width: 145,
        height: 48,
        borderRadius: 10,
        top: 280,
        alignSelf:  'center',
        zIndex: 1
    },
    backButton: {
        width: 45,
        height: 45,
        top: 28,
        borderRadius: 20,
        alignSelf: 'flex-start',
        left: 15
    }
})