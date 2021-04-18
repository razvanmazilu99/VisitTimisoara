import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity, TouchableHighlight, ScrollView } from 'react-native';
import { Icon } from 'react-native-elements';
import { Rating } from "react-native-elements";

export default class TemplateScreen extends React.Component{
    
    constructor(props) {
        super(props);
        this.state = ({
            pushColor: false
        })
    }

    amanda() {
        this.state.pushColor = !this.state.pushColor;
        console.log(this.state.pushColor);
    }

    render(){

        return(
            <View style={styles.container}>
                <Image style={styles.image1} source={require("../assets/U10.jpg")} />
                <Text style={styles.title}>Piata Victoriei</Text>
                <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={styles.homeButton}>
                    <Icon name='chevron-left' size={ 30 } iconStyle={ styles.icon }/>
                    <Text style={{ fontSize: 20, color: 'white', bottom: 1 }}>Home</Text>
                </TouchableOpacity>



                <TouchableOpacity onPress={() => this.amanda()} style={styles.heart}>
                    <Icon type='ionicon' name="heart" size={ 40 } iconStyle={styles.icon}/>
                </TouchableOpacity>

                <ScrollView style={{ flex: 1, top: 280, marginRight: 25, marginLeft: 15 }}>
                    <Text style={{ textAlign: 'justify' , fontSize: 18, color: 'beige', top: 20, paddingLeft: 10 }}>        Cel mai important loc din Timișoara este Piața Victoriei. Situată în centrul orașului, Piața Victoriei este locul în care s-a născut Revoluția din 1989. Pe fațadele clădirilor istorice construite la începutul secolului XX încă se mai pot vedea urmele gloanțelor trase în timpul evenimentelor sângeroase din decembrie 1989. Piața Victoriei este străjuită de Catedrala Mitropolitană, cea mai înaltă biserică din România la ora actuală, iar la polul opus se înalță clădirea Operei care adăpostește patru instituții de cultură. </Text>
                    <Image style={{ width: 300, height: 200, top: 30, marginLeft: 60, borderRadius: 100 }} source={require("../assets/U10.jpg")}/>
                    <Image style={{ width: 300, height: 200, top: 70, marginLeft: -10, borderRadius: 100 }} source={require("../assets/Corso.jpg")}/>
                    <Text style={{ top: 100 }}>{"\n\n\n\n"}</Text>
                    <Rating
                        fractions = {0}
                        imageSize = {40}
                        minValue = {0}
      
                        onFinishRating={() =>
                            console.log("onFinishRating()")
                        }

                        onStartRating={() => console.log("onStartRating()")}
     
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
                        startingValue={0}
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
        top: 230,
        left: 0,
        width: 95,
        height: 35,
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