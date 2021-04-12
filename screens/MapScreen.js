import React from 'react';
import MapView, { Callout, Marker } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';

export default class MapScreen extends React.Component{
    
    render(){
        return(
            <View style={styles.container}>
                <View style={{flex: 0.10, flexDirection: 'row',  top: 17, height: 80}}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Profile')} style={{height: 30, width: 30, margin: 10, marginTop: 20}}>
                        <Image style = {{ height: 30, width: 30 }} source = {require("../assets/user1.png")}/>
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
                            <TouchableHighlight style={{ left: 10, top: 17, backgroundColor: '#9C552E', borderRadius: 13, width: 26, height: 26}} />
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
                    <Marker coordinate={{ latitude: 45.75372, longitude: 21.22574}}>
                        <Callout>
                            <View>
                                <Text>Piata Victoriei</Text>
                            </View>
                        </Callout>

                    </Marker>
                    <Marker pinColor={'green'} coordinate={{ latitude: 45.75805, longitude: 21.22898}}>
                        <Callout>
                            <View>
                                <View>
                                    <Image style={{width: 80, height: 80}} source = {require("../assets/U10.jpg")}/>
                                </View>
                                <Text>Piata Unirii</Text>
                            </View>
                        </Callout>
                    </Marker>
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