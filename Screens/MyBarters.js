import React, {Component} from 'react';
import {Text, View} from 'react-native';

export default class MyBarters extends Component{

    state = {
        item_name : this.props.navigation.getParam('details')['item_name'],
        item_description : this.props.navigation.getParam('details')['item_description'],
        name : this.props.navigation.getParam('details')['name'],
        phone_no : this.props.navigation.getParam('details')['phone_no'],
    }

    render(){
        return(
            <View>
                <Text> {this.state.item_name} </Text>
                <Text> {this.state.item_description} </Text>
                <Text> {this.state.name} </Text>
                <Text> {this.state.phone_no} </Text>
            </View>
        )
    }
}