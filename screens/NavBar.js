import { View, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';
import React from 'react';

export default class NavBar extends React.Component{
    render(){
        return(
            <View style={styles.bar}>
                <View style={styles.icon}>
                   <TouchableOpacity  style={styles.icon}>
                        <Image style={styles.icon} source={require("../assets/explore.png")}/>
                        </TouchableOpacity> 
                </View>
                <View style={styles.icon}>
                    <TouchableOpacity onPress={()=> this.props.navigation.navigate('Map')} style={styles.icon} >
                        <Image style={styles.icon} source={require("../assets/map.png")}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.icon}>
                    <TouchableOpacity style={styles.icon}>
                        <Image style={styles.icon} source={require("../assets/heart.png")}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.icon}>
                    <TouchableOpacity style={styles.icon}>
                        <Image style={styles.icon} source={require("../assets/Historical-Icon.png")}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.icon}>
                    <TouchableOpacity style={styles.icon}>
                        <Image style={styles.icon} source={require("../assets/destination.png")}/>
                    </TouchableOpacity>
                    </View>
            </View>
        );
    }
    
}

const styles = StyleSheet.create({
    bar: {
        position: 'absolute',
        bottom: 10,
        flex: 1,
        justifyContent: "space-around",
        flexDirection: "row",
        alignItems: 'center',
        marginLeft: 20

    },

    icon: {
        //backgroundColor: 'red',
        width: 45,
        height: 45,
        flex: 1,
        justifyContent: "space-around",
    }
})