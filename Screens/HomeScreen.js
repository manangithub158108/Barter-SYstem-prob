import React, {Component} from 'react';
import {Text, View} from 'react-native';
import firebase from 'firebase';
import firestore from '../config';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import { TouchableOpacity } from 'react-native';


export default class HomeScreen extends Component{

    state = {
        allItems : [],
    }

    componentDidMount = () => {
        firestore.collection('items').onSnapshot((snapshot) => {
            var allItems = snapshot.docs.map((doc) => doc.data());
            this.setState({
                allItems : allItems
            })
        })
    }

    renderItem = ({item}) => {
        <ListItem 
        title = {item.item_name}
        subtitle = {item.item_description}
        rightElement = {
            <TouchableOpacity onPress = {() => {
                this.props.navigation.navigate('MyBarters', {'details' : item})
            }}>
                <Text> View </Text>
            </TouchableOpacity>
        } />
    }

    render(){
        return(
            <View>
                <Text> All your items :- </Text>
                <FlatList data = {this.state.allItems}></FlatList>
            </View>
        )
    }
}