import React, {Component} from 'react';
import {Text, View} from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import AddItem from './Screens/AddItem';
import HomeScreen from './Screens/HomeScreen';
import LoginScreen from './Screens/LoginScreen';
import SignupScreen from './Screens/SignupScreen';
import customSideBarComponent from './Screens/customSideBarComponent';
import MyBarters from './Screens/MyBarters';

export default class App extends Component{
  render(){
    return(
      <AppContainer/>
    )
  }
}

const UserAuth = createBottomTabNavigator({
  LoginScreen : {
    screen : LoginScreen,
    navigationOptions : {
      tabBarLabel : 'Login Screen'
    }
  },

  SignupScreen : {
    screen : SignupScreen,
    navigationOptions : {
      tabBarLabel : 'Signup Screen'
    }
  }
})

const DrawerNavigator = createDrawerNavigator({
  Home: {screen : HomeScreen},
  AddItem : {screen : AddItem},
},
{
  contentComponent : customSideBarComponent
},
{
  initialRouteName : 'Home',
})

const SwitchNavigator = createSwitchNavigator({
  UserAuth : {
    screen : UserAuth
  },
  DrawerNavigator : {
    screen : DrawerNavigator
  },
  MyBarters : {
    screen : MyBarters
  }
})

const AppContainer = createAppContainer(SwitchNavigator);