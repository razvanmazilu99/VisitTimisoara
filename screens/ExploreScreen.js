import React from 'react';
import { Text, View, Image, ScrollView, Button } from 'react-native';
import Attraction from '../attractions/Attraction';
import AttractionList from './AttractionList';
import AttractionSection from './AttractionSection';

//var images = ["../assets/explore.png", "../assets/heart.png"];
/*var images = ["https://images.app.goo.gl/LCFsVHiUWCaVWD8y8"];
let at1 = new Attraction("Piata Victoriei", "Description", images, 12, "Istoric", "Centru", 4);
let at2 = new Attraction("Piata Unirii", "Description1", images, 12, "Istoric", "Centru", 5);
const attractionsArray = [];
attractionsArray.push(at1);
attractionsArray.push(at2);

function display(){
    return attractionsArray.map((item) => {
        return(
            <View>
                <Text>
                    {item.name}
                </Text>
                <Image 
                    style = {{  position: 'absolute',
                                width: 347,
                                height: 157,
                                left: 35,
                                top: 95
                            }}
                    source = {{ uri : images[0]}}/>
            </View>
            
        );
    });
}*/

//const firebase = require("firebase");
//require("firebase/firestore");
//var db = firebase.firestore();

export default class ExploreScreen extends React.Component{

    /*fire() {
        db.collection("attractions").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                console.log(`${doc.id} => ${doc.data().name}`);
            });
        });
    }*/

    render(){
          return(
            <View style={{flex: 1, backgroundColor: '#1A1B29'}}>
                <View style={{flexDirection: 'row',  top: 17, height: 80}}>
                    <Image style = {{ height: 30, width: 30, margin: 10, marginTop: 20 }} source = {require("../assets/user1.png")}/>
                    <Text style={{ color: 'white', fontSize: 30, top: 10, margin: 7, fontWeight: 'bold' }}>Explore</Text>
                </View>
                <ScrollView>
                    <AttractionList/>
                </ScrollView>
            </View>
            
            );
    };
}  