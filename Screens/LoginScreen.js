import React, {Component} from 'react';
import { TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native';
import {Text, View} from 'react-native';
import firebase from 'firebase';
import firestore from '../config';

export default class LoginScreen extends Component{

  state = {
    email : '',
    password : ''
  }

  userLogin = () => {
    firebase.auth().signInWithEmailAndPassword(
      this.state.email, this.state.password
    );
    this.props.navigation.navigate('Home');
    alert('User logged in successfully');
  }

  render(){
    return(
      <View>

          <TextInput onChangeText = {(text) => {
            this.setState({
              email : text
            })
          }} placeholder= {'Enter email'}></TextInput>

          <TextInput onChangeText = {(text) => {
            this.setState({
              password : text
            })
          }} placeholder= {'Enter password'} secureTextEntry = {true}></TextInput>
          <TouchableOpacity onPress = {() => {
            this.userLogin();
          }}>
            <Text> Submit  </Text>
          </TouchableOpacity>
      </View>
    )
  }
}