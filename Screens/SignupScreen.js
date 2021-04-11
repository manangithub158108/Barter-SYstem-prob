import React, {Component} from 'react';
import {Text, View, TextInput, TouchableOpacity} from 'react-native';
import firebase from 'firebase';
import firestore from '../config';

export default class SignupScreen extends Component{

  state = {
    email : '',
    password : '',
    name : '',
    address : ''
  }

  userSignup = () => {
    const Signup = firebase.auth().createUserWithEmailAndPassword(
      this.state.email, this.state.password
    );
    if(Signup){

      firestore.collection('users').add({
        'email' : this.state.email,
        'name' : this.state.name,
        'address' : this.state.address
      })
      this.props.navigation.navigate('LoginScreen');
      alert('User Signed up Successfully');
    }
  }

  render(){
    return(
      <View>
        <TextInput onChangeText = {(text) => {
            this.setState({
              name : text
            })
          }} placeholder= {'Enter name'}></TextInput>

        <TextInput onChangeText = {(text) => {
            this.setState({
              address : text
            })
          }} placeholder= {'Enter address'}></TextInput>

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