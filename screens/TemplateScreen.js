import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity, Pressable, TouchableHighlight, ScrollView } from 'react-native';
import { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Icon } from 'react-native-elements';
import { Rating } from "react-native-elements";
import firebase from '../ApiKeys';

const Button = () => {

    const [liked, setLiked] = useState(false);

    return (
        <TouchableOpacity onPress={() => setLiked((isLiked) => !isLiked)} style={styles.heart}>
            <MaterialCommunityIcons
                name={liked ? "heart" : "heart"}
                size={37}
                color={liked ? "tomato" : "white"}
            />
        </TouchableOpacity>
    );
};

export default class TemplateScreen extends React.Component{
    
   // constructor(props) {
     //   super(props);
      //  this.state = ({
         //pushColor: false
        //    rating: this.props.route.params.rating
     //   })
    //}

    //amanda() {
   //     this.state.pushColor = !this.state.pushColor;
   //     console.log(this.state.pushColor);
   // }

    render() {

        ratingCompleted = (r) => {
            //console.log(this.props.route.params.rating)
            let sum = this.props.route.params.rating*0.8 + r*0.2;
            
            var db = firebase.firestore();
            db.collection("attractions").doc(this.props.route.params.id).update({rating: sum});

            //console.log("Rating is: " + sum)
        }

        return(
            
            <View style={styles.container}>
                <Image style={styles.image1} source={{ uri: this.props.route.params.image }} />
                <Text style={styles.title}>{ this.props.route.params.name }</Text>
                <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={styles.homeButton}>
                    <Icon name='chevron-left' size={ 30 } iconStyle={ styles.icon }/>
                    <Text style={{ fontSize: 20, color: 'white', bottom: 1 }}>Home</Text>
                </TouchableOpacity>

               {/* <TouchableOpacity onPress={() => this.amanda()} style={styles.heart}>
                    <Icon type='ionicon' name="heart" size={ 40 } iconStyle={styles.icon}/>
        </TouchableOpacity>*/}
                <Button/>

                <ScrollView style={{ flex: 1, top: 280, marginRight: 25, marginLeft: 15 }}>
                    <Text style={{ textAlign: 'justify' , fontSize: 18, color: 'beige', top: 20, paddingLeft: 10 }}>{ this.props.route.params.description }</Text>
                    <Image style={{ width: 300, height: 200, top: 30, marginLeft: 60, borderRadius: 100 }} source={{ uri: this.props.route.params.image1 }}/>
                    <Image style={{ width: 300, height: 200, top: 70, marginLeft: -10, borderRadius: 100 }} source={{ uri: this.props.route.params.image2 }}/>
                    <Text style={{ top: 100 }}>{"\n\n\n\n"}</Text>
                    <Rating
                        fractions = {2}
                        imageSize = {40}
                        minValue = {0}
      
                        onFinishRating={ratingCompleted}

                        //onStartRating={() => console.log("onStartRating()")}
     
                        ratingBackgroundColor = "#1A1B29"
                        ratingColor = "#1A1B29"
                        ratingCount={5}
                        ratingImage = "star"
                        ratingTextColor = "white"
      
                        reviews={[
                            "Terrible",
                            "Bad",
                            "Okay",
                            "Good",
                            "Great"
                        ]}
      
                        showRating
                        startingValue={ this.props.route.params.rating }
                        style={{}}
                        type="star"
                    />
                    <Text> {"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"}  </Text>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    
    container: {
      flex: 1,
      backgroundColor: '#1A1B29',
      justifyContent: 'center'
    },

    image1: {
        position: 'absolute',
        width: 414,
        height: 274,
        borderRadius: 140,
        left: 40,
        top: 30
    },

    title: {
        position: 'absolute',
        width: 166,
        color: 'white',
        left: 0,
        top: 101,
        fontWeight: 'bold',
        fontSize: 36,
        alignItems: 'flex-end',
        textAlign: 'center'
    },
    
    icon: {
        height: 50,
        left: 0,
        color: 'white'
    },

    heart: {
        top: 220,
        left: 25,
    },

    homeButton: {
        flex: 0.05,
        flexDirection: 'row',
        top: 30,
        left: 5,
        width: 95,
        height: 35
    },

    text1: {
        fontWeight: 'bold',
        fontSize: 15,
        textAlign: 'justify',
        display: 'flex',
        alignItems: 'flex-end',
        color: 'white'
    },

    image2: {
        width: 240.52,
        height: 160.37,
        left: 174,
        top: 5,
        borderRadius: 80
    }

});