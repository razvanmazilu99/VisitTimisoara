import React from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';

export default class AttractionSection extends React.Component{
    render(){
        return(
            <View style={{top: 50}}>
                <Image style= {{width: 80, height: 80}} source={this.props.detail.image} />
                <Text>{this.props.detail.name}</Text>
            </View>
        )
    }

}