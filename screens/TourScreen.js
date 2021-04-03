import React from 'react';
import { Text, View, StatusBar, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default class HistoryScreen extends React.Component{
    render(){
        return(
            
            <View style={{flex: 1, backgroundColor: '#1A1B29'}}>
                <StatusBar style="auto" barStyle="light-content" />
                <View style={{flexDirection: 'row',  top: 17, height: 80}}>
                    <Image style = {{ height: 30, width: 30, margin: 10, marginTop: 20 }} source = {require("../assets/user1.png")}/>
                    <Text style={{color: 'white', fontSize: 30, top: 10, margin: 7, fontWeight: 'bold' }}>Tour</Text>
                </View>
                <View>
                    <Image  style = {{  marginLeft: 15, marginBottom: 10, top: 5, width: 406, height: 347, borderBottomRightRadius: 110, borderBottomLeftRadius: 80, borderTopLeftRadius: 200, borderTopRightRadius: 75 }} source = { require('../assets/Alba-Iulia2.jpg') } />
                </View>
                <View>
                    <TouchableOpacity onPress={ () => this.props.navigation.navigate('GuidedTours') } style={styles.loginButton}>
                        <Text style={{color: 'white', fontSize: 26, textAlign: 'center', top: 7, fontWeight: 'bold'}}>Guided Tours</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={ () => this.props.navigation.navigate('History') } style={ [styles.loginButton, {top: 70}]}>
                        <Text style={{color: 'white', fontSize: 26, textAlign: 'center', top: 7, fontWeight: 'bold'}}>Create your tour</Text>
                    </TouchableOpacity>
                </View>
            </View>
            
        );
    };
}

const styles = StyleSheet.create({

    loginButton: {
        backgroundColor: "#59B398",
        width: 267,
        height: 51,
        borderRadius: 60,
        top: 50,
        alignSelf: 'center'
    },

});