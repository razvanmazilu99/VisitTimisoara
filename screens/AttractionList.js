import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import AttractionSection from './AttractionSection';
import Attraction from '../attractions/Attraction';

let at1 = new Attraction("Piata Victoriei", "Description", require("../assets/heart.png"), 12, "Istoric", "Centru", 4);
let at2 = new Attraction("Piata Unirii", "Description1", require("../assets/map.png"), 12, "Istoric", "Centru", 5);
const attractionsArray = [];
attractionsArray.push(at1);
attractionsArray.push(at2);

export default class AttractionList extends React.Component{
    
    state={
        attractionsArray: attractionsArray
    }

    getPhotos=() =>{
        return this.state.attractionsArray.map(item => {
            return <AttractionSection detail={item} key={item.name}/>
        })
    } 

    render(){
        return(
            <ScrollView>
                {this.getPhotos()}
            </ScrollView>
        )
    }

}