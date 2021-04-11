import React from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';

export default class AttractionSection extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Image style={{ height: 250, width: 375, marginTop: 20, borderRadius: 20 }} source={this.props.detail.image} />
                <View style={{ position: 'absolute', borderRadius: 15, backgroundColor: '#088761', left: -10, bottom: -30 }}>
                    <Text style={{ color: "white", padding: 5, fontSize: 30}}>{this.props.detail.name}</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    
    container: {
        flex: 1,
        margin: 20,
        //backgroundColor: 'white',
        marginTop: 20,
        height: 250,
        alignItems: 'center',
        justifyContent: 'center',
    },
});