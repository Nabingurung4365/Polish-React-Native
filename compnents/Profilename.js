import React, { Component } from 'react';
import {Text, View,Image,TouchableOpacity } from 'react-native';
import styles from '../styles/style';

export default class Profilename extends Component{
    render(){
        return(
            <View style={styles.container}>
            <View style={styles.logo}>
            <Image 
            source={require('../images/react-native-1024x631.png')}  
            style={styles.image} 
            />
            <Text style={styles.texts}>Sir Local </Text>
            <Text style={styles.textss}>Do usług!</Text>
            
            
            <TouchableOpacity
         style={styles.button}
         onPress={() => this.props.navigation.navigate('contact')}
       >
         <Text style={styles.buttontext}> wprowadz numer telefonu</Text>
       </TouchableOpacity>
            <Text style={styles.textsss}>zaloguj za pomoca konta Google lub Facebook</Text>
            
            </View>
         
           
</View>

        );
    }
}
 