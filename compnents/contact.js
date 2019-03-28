import React, { Component } from 'react';
import {  Text, View,TextInput,TouchableOpacity } from 'react-native';
import styles from '../styles/style';

export default class Contact extends Component{
    render(){
        return(
            <View style={styles.container}>
            <View style={styles.subcontainer}>
            <Text style={styles.contact}>Wpisz numer telefonu komórkowego:</Text>
            <TextInput 
            style={styles.textInput}
            keyboardType='numeric'
            placeholder="Enter Your Phone Number"
            placeholderTextColor="#fff"
           
        //  onChangeText={(text)=> this.onChanged(text)}
            //value={this.state.myNumber}
            maxLength={10}  //setting limit of input
            />
             
             <TouchableOpacity
         style={styles.contactbutton}
         onPress={() => this.props.navigation.navigate('message')}
       >
         <Text style={styles.buttontext}> Submit</Text>
       </TouchableOpacity>
            
       </View>
</View>

        );
    }
}
 