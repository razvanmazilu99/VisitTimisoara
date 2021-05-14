import React from 'react';
import firebase from '../ApiKeys';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList, StatusBar, Image, ImageBackground } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";

//var gsReference = storage.refFromURL('gs://bucket/images/stars.jpg');
    
//var httpsReference = storage.refFromURL('https://firebasestorage.googleapis.com/v0/b/visittimisoara-76452.appspot.com/o/Alba-Iulia1.jpg?alt=media&token=e476a4b6-2bf3-41bf-9fd3-1192af22da3f');  


const DATA = [
    {
      id: '1',
      image: "https://firebasestorage.googleapis.com/v0/b/visittimisoara-76452.appspot.com/o/images%2FAlba-Iulia1.jpg?alt=media&token=b58fa9c2-4e92-4462-80d6-0a2b273f51b1",
      title: 'First Item',
      zone: 'pisica',
      type: 'biserica',
      rating: 4.24,
    },
    {
      id: '2',
      image: "https://firebasestorage.googleapis.com/v0/b/visittimisoara-76452.appspot.com/o/images%2FAlba-Iulia1.jpg?alt=media&token=b58fa9c2-4e92-4462-80d6-0a2b273f51b1",
      title: 'Second Item',
      zone: '2',
      type: 'bisericaPenti',
      rating: 5,
    },
    {
      id: '3',
      image: "https://firebasestorage.googleapis.com/v0/b/visittimisoara-76452.appspot.com/o/images%2FAlba-Iulia1.jpg?alt=media&token=b58fa9c2-4e92-4462-80d6-0a2b273f51b1",
      title: 'Third Item Below Belly',
      zone: '3',
      type: 'bisericaBapt',
      rating: 3.5,
    },
  ];

  const Item = ({ title, image, zone, type, rating }) => (
    <View style={styles.item}>
        <View style={{flex: 0.55}}>
            <Image style={{ width: 200, height: 200, borderTopRightRadius: 20, borderBottomRightRadius: 20 ,alignSelf: 'flex-start'}} source={{uri: image}} />
        </View>
        <View style={{flex: 0.45}}>
            <View style={{flex: 1, flexDirection: 'column'}}>
                <Text style={styles.title}>{title}</Text>
                <View style={{flex: 0.3, flexDirection: 'row'}}>
                    <View style={{flex: 0.40}}>
                        <Text style={{fontSize: 16, color: "#088761"}}>{zone}</Text>
                    </View>
                    <View style={{flex: 0.60}}>
                        <Text style={{fontSize: 16, color: "#088761"}}>{type}</Text>
                    </View>
                </View>
                <View style = {{backgroundColor: "#2D9CDB", width: 150, height: 40, borderRadius: 10}}>
                    <View style = {{flex: 0.5, top: 8, left: 30}}>
                        <Text style = {{color: 'white', fontSize: 18, fontWeight: 'bold'}}>{rating}/5</Text>
                    </View>
                    <View style = {{flex: 0.5}}>
                        <MaterialCommunityIcons
                            name={"star"}
                            size={37}
                            color={"yellow"}
                            style={{alignSelf: 'flex-end', top: -19, marginRight: 20}}
                        />
                    </View>
                </View>
            </View>
            

        </View>
    </View>
  );

export default class SavedScreen extends React.Component{
    
    render(){

        var image = "https://firebasestorage.googleapis.com/v0/b/visittimisoara-76452.appspot.com/o/images%2FAlba-Iulia1.jpg?alt=media&token=b58fa9c2-4e92-4462-80d6-0a2b273f51b1" ;

        const renderItem = ({ item }) => (
            <Item title = {item.title} image = {item.image} zone = {item.zone} type = {item.type} rating = {item.rating}/>
        );

        return(

            <View style={styles.container}>
                <View style={{flexDirection: 'row',  top: 17, height: 80}}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Profile')} style={{height: 30, width: 30, margin: 10, marginTop: 20}}>
                        <Image style = {{ height: 30, width: 30}} source = {require("../assets/user1.png")}/>
                    </TouchableOpacity>
                    
                    <Text style={{ color: 'white', fontSize: 30, top: 10, margin: 7, fontWeight: 'bold' }}>Saved</Text>
                </View>
                {/*<View>
                    <Image style={{ top:40, width: 600, height: 200, alignSelf: 'center' }} source={{ uri: image }} />
                </View>*/}

                <FlatList
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />

            </View>
        );
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#1A1B29',
    },

    item: {
        flex: 1,
        flexDirection: 'row',
        //padding: 20,
        marginVertical: 8,
       // marginHorizontal: 16,
    },

    title: {
        color: 'white',
        fontSize: 26,
        top: 5,
        flex: 0.2,
    },

});