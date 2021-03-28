import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import AttractionSection from './AttractionSection';
import Attraction from '../attractions/Attraction';

let at1 = new Attraction(1,"Piata Victoriei", "Description", require("../assets/U10.jpg"), 12, "Istoric", "Centru", 4);
let at2 = new Attraction(2,"Piata Unirii", "Description1", require("../assets/map.png"), 12, "Istoric", "Centru", 5);
let at3 = new Attraction(3,"Piata Libertatii", "Description1", require("../assets/map.png"), 12, "Istoric", "Centru", 5);
const attractionsArray = [];
attractionsArray.push(at1);
attractionsArray.push(at2);
attractionsArray.push(at3);

export default class AttractionList extends React.Component{
    
    state={
        attractionsArray: attractionsArray
    }

    getPhotos=() =>{
        return this.state.attractionsArray.map(item => {
            return <AttractionSection detail={item} key={item.id}/>
        })
    } 

    render(){
        return(
            <ScrollView style={{paddingBottom: 120}}>
                {this.getPhotos()}
            </ScrollView>
        )
    }

}