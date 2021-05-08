import React from 'react';
import MapView, { Callout, Marker } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import Attraction from '../attractions/Attraction';
import firebase from '../ApiKeys';

var db = firebase.firestore();
const attractionsArray = [];

db.collection("attractions").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        //console.log(`${doc.id} => ${doc.data().name}, ${doc.data().image}`);
        let at = new Attraction(doc.id, doc.data().name, doc.data().description, doc.data().image, doc.data().location.latitude, doc.data().location.longitude, doc.data().type, doc.data().zone, doc.data().rating);
        attractionsArray.push(at);
        //console.log(attractionsArray);
    });
});

export default class MapScreen extends React.Component{
    
    constructor(props) {
        super(props);
        this.state={
            markers: attractionsArray,
        };
    }
    
    printMap=() => {
        let colors = new Map();
        colors.set("Churches", "#D9C93D");
        colors.set("Parks", "#36A555");
        colors.set("Museums", "#43A896");
        colors.set("Historical buildings", "tomato");
        colors.set("Shopping", "#BE51A6");
        return this.state.markers.map( (item, index) => {
            //return <Marker key={index} coordinate={{ latitude: parseFloat(item.latitude), longitude: parseFloat(item.longitude)}} title={item.name}/>
            for (let [key, value] of colors) { if(key == item.type) { var c = value }}
            return <Marker key={index} pinColor={c} coordinate={{ latitude: parseFloat(item.latitude), longitude: parseFloat(item.longitude)}}>
                        <Callout>
                            <View>
                                <Text style={{ alignSelf: 'center', height: 90, position: "relative", bottom: 15 }}>
                                    <Image source = {{uri: item.image}} resizeMode="cover" style={{width: 80, height: 80}} />
                                </Text>
                                <Text>{item.name}</Text>
                            </View>
                        </Callout>
                    </Marker>
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{flex: 0.10, flexDirection: 'row',  top: 17, height: 80}}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Profile')} style={{height: 30, width: 30, margin: 10, marginTop: 20}}>
                        <Image style = {{ height: 30, width: 30}} source = {require("../assets/user1.png")}/>
                    </TouchableOpacity>

                    <Text style={{color: 'white', fontSize: 30, top: 10, margin: 7, fontWeight: 'bold' }}>Map</Text>
                </View>
                <View style={{flex: 0.15}}>
                    <View style={{flex: 0.5, flexDirection: 'row'}}>
                        <View style={{flex:0.33}}>
                            <TouchableHighlight style={{ left: 10, top: 17, backgroundColor: '#D9C93D', borderRadius: 13, width: 26, height: 26}} />
                            <Text style={{fontSize: 16, top: -7, left: 45, color: 'white', fontWeight: 'bold'}}>Churches</Text>
                        </View>
                        <View style={{flex:0.33}}>
                            <TouchableHighlight style={{ left: 20, top: 17, backgroundColor: '#36A555', borderRadius: 13, width: 26, height: 26}} />
                            <Text style={{fontSize: 16, top: -7, left: 55, color: 'white', fontWeight: 'bold'}}>Parks</Text> 
                        </View>
                        <View style={{flex:0.33}}>
                            <TouchableHighlight style={{ top: 17, backgroundColor: '#43A896', borderRadius: 13, width: 26, height: 26}} />
                            <Text style={{fontSize: 16, top: -7, left: 35, color: 'white', fontWeight: 'bold'}}>Museums</Text> 
                        </View>
                    </View>
                    <View style={{flex: 0.5, flexDirection: 'row'}}>
                        <View style={{flex:0.45}}>
                            <TouchableHighlight style={{ left: 10, top: 17, backgroundColor: 'tomato', borderRadius: 13, width: 26, height: 26}} />
                            <Text style={{fontSize: 16, top: -7, left: 45, color: 'white', fontWeight: 'bold'}}>Historical buildings</Text> 
                        </View>
                        <View style={{flex:0.33}}>
                            <TouchableHighlight style={{ left: 55, top: 17, backgroundColor: '#BE51A6', borderRadius: 13, width: 26, height: 26}} />
                            <Text style={{fontSize: 16, top: -7, left: 90, color: 'white', fontWeight: 'bold'}}>Shopping</Text> 
                        </View>
                    </View>
                    
                    
                </View>
                <MapView 
                    style={styles.map} 
                    initialRegion={{
                        latitude: 45.755936, 
                        longitude: 21.228802,
                        latitudeDelta: 0.000922,
                        longitudeDelta: 0.0321,
                      }}
                    
                >
                {this.printMap()}
                    {/* <Marker pinColor={'green'} coordinate={{ latitude: 45.75805, longitude: 21.22898}}>
                        <Callout>
                            <View>
                                <Text>
                                    <Image source = {require("../assets/U10.jpg")} style={{width: 80, height: 80}} />
                                </Text>
                                <Text>Piata Unirii</Text>
                            </View>
                        </Callout>
                    </Marker> */}
                </MapView>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#1A1B29',
      justifyContent: 'center',
    },
    map: {
      flex: 0.75,
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    },
  });