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
        let at = new Attraction(doc.id, doc.data().name, doc.data().description, require("../assets/U10.jpg"), 12, doc.data().type, doc.data().zone, doc.data().rating);
        attractionsArray.push(at);
    });
});

/*let at1 = new Attraction(1,"Piata Victoriei", "Description", require("../assets/U10.jpg"), 12, "Istoric", "Centru", 4);
let at2 = new Attraction(2,"Piata Unirii", "Description1", require("../assets/map.png"), 12, "Istoric", "Centru", 5);
let at3 = new Attraction(3,"Piata Libertatii", "Description1", require("../assets/map.png"), 12, "Istoric", "Centru", 5);
const attractionsArray = [];
attractionsArray.push(at1);
attractionsArray.push(at2);
attractionsArray.push(at3);*/

export default class AttractionList extends React.Component{
    
    state={
        attractionsArray: attractionsArray
    }

    getPhotos=() =>{
        return this.state.attractionsArray.map(item => {
            return <AttractionSection style={{backgroundColor: '#1A1B29'}} detail={item} key={item.id}/>
        })
    } 

    render(){
        return(
            <ScrollView style={{paddingBottom: 80, backgroundColor: '#1A1B29'}}>
                {this.getPhotos()}
            </ScrollView>
        )
    }

}