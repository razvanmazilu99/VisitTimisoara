import React from 'react';
import { Linking, Text, View, StatusBar, Image, StyleSheet, SafeAreaView } from 'react-native';

export default class HistoryScreen extends React.Component{
    render(){
        return(

            <View style={{flex: 1, backgroundColor: '#1A1B29'}}>
                <StatusBar style="auto" barStyle="light-content" />

                <View style={{flexDirection: 'row',  top: 17, height: 80}}>
                    <Image style = {{ height: 30, width: 30, margin: 10, marginTop: 20 }} source = {require("../assets/user1.png")}/>
                    <Text style={{ color: 'white', fontSize: 30, top: 10, margin: 7, fontWeight: 'bold' }}>Tour</Text>
                </View>

                <View>
                    <Text style={{color: 'white', fontSize: 30, margin: 7, fontWeight: 'bold', alignSelf: 'center' }}>Guided Tours</Text>
                </View>

                <View style={{ alignSelf: 'center', flex: 1, flexDirection: 'row'}}>
                    <View style={{flex: 0.35}}>
                        <Image  style = {{ marginLeft: 20, marginBottom: 10, top: 5, width: 150, height: 200, borderBottomRightRadius: 400, borderBottomLeftRadius: 80, borderTopLeftRadius: 400, borderTopRightRadius: 110 }} source = { require('../assets/CasaBruck.jpg') } />     
                    </View>
                    <View style={{flex: 0.65}}>
                        <View style={{ alignSelf: 'center', flex: 0.55}} >
                            <View style={{flex: 0.35}}>
                                <Text onPress={() => Linking.openURL('http://www.timisoaracitytours.com/the_specials/timisoara-classic-tour/')}
                                      style = {{ top: 45, color: 'white', textDecorationLine: 'underline', fontStyle: 'italic', fontSize: 28, fontWeight: 'bold' }}
                                >Classic tour</Text>
                            </View>
                            <View style={{flex: 0.25}}>
                                <Text style = {{ top: 70, color: '#219653', fontSize: 20, fontWeight: 'bold' }}
                                >2.5 hours</Text>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={{ alignSelf: 'center', flex: 1, flexDirection: 'row'}}>
                    <View style={{flex: 0.35}}>
                        <Image  style = {{ marginLeft: 20, marginBottom: 10, top: 5, width: 150, height: 200, borderBottomRightRadius: 400, borderBottomLeftRadius: 80, borderTopLeftRadius: 400, borderTopRightRadius: 110 }} source = { require('../assets/Sinagoga1.jpg') } />     
                    </View>
                    <View style={{flex: 0.65}}>
                        <View style={{ alignSelf: 'center', flex: 0.55}} >
                            <View style={{flex: 0.35}}>
                                <Text onPress={() => Linking.openURL('http://www.timisoaracitytours.com/the_specials/jewish-heritage-tour-timisoara/')}
                                      style = {{ top: 45, color: 'white', textDecorationLine: 'underline', fontStyle: 'italic', fontSize: 28, fontWeight: 'bold' }}
                                >Jewish tour</Text>
                            </View>
                            <View style={{flex: 0.25}}>
                                <Text style = {{ top: 70, color: '#219653', fontSize: 20, fontWeight: 'bold' }}
                                >3 hours</Text>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={{ alignSelf: 'center', flex: 1, flexDirection: 'row'}}>
                    <View style={{flex: 0.35}}>
                        <Image  style = {{ opacity: 0.7, marginLeft: 20, marginBottom: 10, top: 5, width: 150, height: 200, borderBottomRightRadius: 400, borderBottomLeftRadius: 80, borderTopLeftRadius: 400, borderTopRightRadius: 110 }} source = { require('../assets/Opera.jpg') } />     
                    </View>
                    <View style={{flex: 0.65}}>
                        <View style={{ alignSelf: 'center', flex: 0.55}} >
                            <View style={{flex: 0.35}}>
                                <Text onPress={() => Linking.openURL('https://www.tripadvisor.com/AttractionProductReview-g298478-d20354252-Timisoara_The_Communist_Tour-Timisoara_Timis_County_Western_Romania_Transylvania.html')}
                                      style = {{ left: 15, top: 45, color: 'white', textDecorationLine: 'underline', fontStyle: 'italic', fontSize: 28, fontWeight: 'bold' }}
                                >Communist tour</Text>
                            </View>
                            <View style={{flex: 0.25}}>
                                <Text style = {{ left: 20, top: 70, color: '#219653', fontSize: 20, fontWeight: 'bold' }}
                                >4 hours</Text>
                            </View>
                        </View>
                    </View>
                </View>
               
            </View>
            
        );
    };
}

const styles = StyleSheet.create({

    loginButton: {
        backgroundColor: "#59B398",
        width: 267,
        height: 51,
        borderRadius: 60,
        top: 50,
        alignSelf: 'center'
    },

});