import React from 'react';
import firebase from '../ApiKeys';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, StatusBar, Image, ImageBackground } from 'react-native';

//var gsReference = storage.refFromURL('gs://bucket/images/stars.jpg');
    
//var httpsReference = storage.refFromURL('https://firebasestorage.googleapis.com/v0/b/visittimisoara-76452.appspot.com/o/Alba-Iulia1.jpg?alt=media&token=e476a4b6-2bf3-41bf-9fd3-1192af22da3f');  



export default class SavedScreen extends React.Component{
    
    render(){

        var image = "https://firebasestorage.googleapis.com/v0/b/visittimisoara-76452.appspot.com/o/images%2FAlba-Iulia1.jpg?alt=media&token=b58fa9c2-4e92-4462-80d6-0a2b273f51b1" ;

        return(
            
            <View style={styles.container}>
                <Image style={{ top:40, width: 600, height: 200, alignSelf: 'center' }} source={{ uri: image }} />
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

});