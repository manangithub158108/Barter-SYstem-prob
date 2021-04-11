import React, {Component} from 'react';
import { TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native';
import {Text, View} from 'react-native';
import firebase from 'firebase';
import firestore from '../config';

export default class AddItem extends Component{

    state = {
        item_name : '',
        item_description : '',
        name : '',
        phone_no : 0
    }

    addItem = () => {
        firestore.collection('items').add({
            'item_name' : this.state.item_name,
            'item_description' : this.state.item_description,
            'name' : this.state.name,
            'phone_no' : this.state.phone_no,
        })

        firestore.collection('notifications').add({
            'item_name' : this.state.item_name,
            'Status' : 'read',
            'message' : 'User has not shown any interest'
        })
        alert('Item added successfully');
    }

    render(){
        return(
            <View>
                <TextInput onChangeText = {(text) => {
                    this.setState({
                        item_name : text
                    })
                }} placeholder = {'Enter your item name'}></TextInput>
                <TextInput onChangeText = {(text) => {
                    this.setState({
                        item_description : text
                    })
                }} placeholder = {'Enter your item description'}></TextInput>
                <TextInput onChangeText = {(text) => {
                    this.setState({
                        name : text
                    })
                }} placeholder = {'Enter your name'}></TextInput>
                <TextInput onChangeText = {(text) => {
                    this.setState({
                        phone_no : text
                    })
                }} placeholder = {'Enter your phone number'}></TextInput>

                <TouchableOpacity onPress = {() => {
                    this.addItem();
                }}>
                    <Text> Add Item </Text>
                </TouchableOpacity>
            </View>
        )
    }
}