import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import firebase from '../ApiKeys';

export default class ProfileScreen extends React.Component{
    
    logout = () => {
        firebase.auth().signOut().then(() => {
            this.props.navigation.navigate('WelcomeScreen');
        }).catch((error) => {
            console.log(error);
        })
    }

    render(){
        var user = firebase.auth().currentUser;
        return(
            <View style={{flex: 1, backgroundColor: 'pink'}}>
                <View style={{alignContent: 'center', flex: 0.38, height: 280, elevation: 20, backgroundColor: '#1A1B29', borderBottomLeftRadius: 25, borderBottomRightRadius: 25}}>
                    <Image 
                        style={{alignSelf: 'center', top: 35, width: 130, height: 130}}
                        source = {require("../assets/profile.png")} />
                    <Text style={{alignSelf: 'center', top: 70, fontSize: 24}}>{user.displayName}</Text>
                    <Text style={{alignSelf: 'center', top: 90, fontSize: 24}}>{user.email}</Text>
                </View>
            	<View style={{flex: 0.62}}>
                    <TouchableOpacity onPress={() => this.logout()} style={styles.logoutButton}>
                        <Image source = {require("../assets/previous.png")} style={{width: 30, height: 30, top: 16, left: 46}}/>
                        <Text style={{color: 'white', fontSize: 26, textAlign: 'right', marginEnd: 55, top: -18}}>Logout</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={styles.backButton}>
                        <Image source = {require("../assets/previous.png")} style={{width: 45, height: 45, top: 8, alignSelf: 'center'}}/>
                    </TouchableOpacity>
                </View>
                
            </View>
        )
    }
}
const styles = StyleSheet.create({
    logoutButton: {
        backgroundColor: "tomato",
        width: 230,
        height: 61,
        borderRadius: 20,
        top: 350,
        alignSelf: 'flex-end',
        right: 15
    },
    backButton: {
        backgroundColor: "gray",
        width: 100,
        height: 61,
        borderRadius: 20,
        top: 290,
        alignSelf: 'flex-start',
        left: 15
    }
})