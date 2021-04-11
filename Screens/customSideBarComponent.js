import React, {Component} from 'react';
import { TouchableOpacity } from 'react-native';
import {Text, View} from 'react-native';
import { DrawerItems } from 'react-navigation-drawer';
import firebase from 'firebase';
import firestore from '../config';

export default class customSideBarComponent extends Component{
    rneder(){
        return(
            <View>
                <DrawerItems {...this.props}>

                </DrawerItems>
                <View>
                    <TouchableOpacity onPress = {() => {
                        firebase.auth().signOut();
                    }}>
                        <Text> Logout ---{'>'} </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}