import React, { Component } from 'react';
import {  Text, View,TextInput,TouchableOpacity } from 'react-native';
import styles from '../styles/style';

export default class Email extends Component{
    render(){
        return(
            <View style={styles.container}>
             <View style={styles.subcontainer}>
            <Text style={styles.contact}>Podaj e-mail:

</Text>
            <TextInput 
            style={styles.textInput}
            keyboardType='email-address'
            placeholder="Enter Your Email Address"
            placeholderTextColor="#fff"
        //  onChangeText={(text)=> this.onChanged(text)}
            //value={this.state.myNumber}
            maxLength={4}  //setting limit of input
            />
             
             <TouchableOpacity
         style={styles.contactbutton}
         onPress={() => this.props.navigation.navigate('password')}
       >
         <Text style={styles.buttontext}> Submit</Text>
       </TouchableOpacity>
       
</View>    

</View>

        );
    }
}
 