import React, { Component } from 'react';
import {  Text, View,TextInput,TouchableOpacity } from 'react-native';
import styles from '../styles/style';

export default class Contact extends Component{
    render(){
        return(
            <View style={styles.container}>
            <View style={styles.subcontainer}>
            <Text style={styles.contact}>Podaj kod wysłany SMS na Twój numer:
</Text>
            <TextInput 
            style={styles.textInput}
            keyboardType='numeric'
            placeholder="Enter Your Code"
            placeholderTextColor="#fff"
        //  onChangeText={(text)=> this.onChanged(text)}
            //value={this.state.myNumber}
            maxLength={4}  //setting limit of input
            />
             
             <TouchableOpacity
         style={styles.contactbutton}
         onPress={() => this.props.navigation.navigate('email')}
       >
         <Text style={styles.buttontext}> Submit</Text>
       </TouchableOpacity>
            

</View></View>

        );
    }
}
 