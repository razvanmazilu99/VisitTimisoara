import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import WelcomeScreen from './WelcomeScreen';
import LoginScreen from './LoginScreen';
import ExploreScreen from './ExploreScreen';
import MapScreen from './MapScreen';
import SignupScreen from './SignupScreen';
import HistoryScreen from './HistoryScreen';
import TourScreen from './TourScreen';
import Ionicons from '@expo/vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default class NavBar extends React.Component{

    render(){
        return(
            
                <Tab.Navigator
                    tabBarOptions={{
                        activeTintColor: 'tomato',
                        inactiveTintColor: 'white',
                        activeBackgroundColor: '#1A1B29',
                        inactiveBackgroundColor: '#1A1B29',
                        style: {borderTopWidth: 0, height: 63},
                        labelStyle: {fontSize: 13, padding: 2},
                    }}
                >
                    <Tab.Screen 
                        name='ExploreScreen' 
                        component={ExploreScreen}
                        options={{
                            tabBarLabel: 'Explore',
                            tabBarIcon: ({focused, color}) => (
                                <Image
                                    source={require('../assets/explore.png')}
                                    style={{
                                        width: 35,
                                        height: 35,
                                    }}
                                />
                            ),
                        }} 
                    />
                    <Tab.Screen 
                        name='Map' 
                        component={MapScreen} 
                        options={{
                            tabBarLabel: 'Map',
                            tabBarIcon: ({focused, color}) => (
                                <Image
                                    source={require('../assets/map.png')}
                                    style={{
                                        width: 40,
                                        height: 40,
                                    }}
                                />
                            ),
                        }} 
                    />
                    <Tab.Screen 
                        name='Login' 
                        component={LoginScreen}
                        options={{
                            tabBarLabel: 'Saved',
                            tabBarIcon: ({focused, color}) => (
                                <Image
                                    source={require('../assets/heart.png')}
                                    style={{
                                        width: 40,
                                        height: 40,
                                    }}
                                />
                            ),
                        }} 
                    />
                    <Tab.Screen 
                        name='History' 
                        component={HistoryScreen}
                        options={{
                            tabBarLabel: 'History',
                            tabBarIcon: ({focused, color}) => (
                                <Image
                                    source={require('../assets/Historical-Icon.png')}
                                    style={{
                                        width: 40,
                                        height: 40,
                                    }}
                                />
                            ),
                        }} 
                    />
                    <Tab.Screen 
                        name='TourScreen' 
                        component={TourScreen}
                        options={{
                            tabBarLabel: 'Tour',
                            tabBarIcon: ({focused, color}) => (
                                <Image
                                    source={require('../assets/destination.png')}
                                    style={{
                                        width: 37,
                                        height: 37,
                                    }}
                                />
                            ),
                        }} 
                    />
                </Tab.Navigator>
           
            /*<View style={styles.bar}>
                <View style={styles.icon}>
                   <TouchableOpacity  style={styles.icon}>
                        <Image style={styles.icon} source={require("../assets/explore.png")}/>
                        </TouchableOpacity> 
                </View>
                <View style={styles.icon}>
                    <TouchableOpacity onPress={()=> this.props.navigation.navigate('Login')} style={styles.icon} >
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
        </View>*/
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