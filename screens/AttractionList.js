import React from 'react';
import { ScrollView, Text, StyleSheet, TouchableOpacity } from 'react-native';
import AttractionSection from './AttractionSection';
import Attraction from '../attractions/Attraction';
import firebase from '../ApiKeys';

var db = firebase.firestore();

const attractionsArray = [];
db.collection("attractions").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        //console.log(`${doc.id} => ${doc.data().name}, ${doc.data().image}`);
        let at = new Attraction(doc.id, doc.data().name, doc.data().description, doc.data().image, doc.data().image1, doc.data().image2, doc.data().location.latitude, doc.data().location.longitude, doc.data().type, doc.data().zone, doc.data().rating);
        attractionsArray.push(at);
    });
});

export default class AttractionList extends React.Component{
    
    state={
        attractionsArray: attractionsArray
    }

    getPhotos=() =>{
        return this.state.attractionsArray.map(item => {
            return (
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Template', {id: item.id, name: item.name, description: item.description, rating: item.rating, image: item.image, image1: item.image1, image2: item.image2})} key={item.id}>              
                    <AttractionSection style={{ backgroundColor: '#1A1B29' }} detail={item} key={item.id}/>
                </TouchableOpacity>
            );
        })
    } 

    render(){
        return(
            <ScrollView style={{ paddingBottom: 20, backgroundColor: '#1A1B29' }}>
                {this.getPhotos()}
            </ScrollView>
        )
    }

}