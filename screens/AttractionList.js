import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import AttractionSection from './AttractionSection';
import Attraction from '../attractions/Attraction';
import firebase from '../ApiKeys';

var db = firebase.firestore();

const attractionsArray = [];
db.collection("attractions").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        //console.log(`${doc.id} => ${doc.data().name}, ${doc.data().image}`);
        let at = new Attraction(doc.id, doc.data().name, doc.data().description, doc.data().image, 12, 13, doc.data().type, doc.data().zone, doc.data().rating);
        attractionsArray.push(at);
    });
});

export default class AttractionList extends React.Component{
    
    state={
        attractionsArray: attractionsArray
    }

    getPhotos=() =>{
        return this.state.attractionsArray.map(item => {
            return <AttractionSection style={{ backgroundColor: '#1A1B29' }} detail={item} key={item.id}/>
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