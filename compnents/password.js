import React, { Component } from 'react';
import {  Text, View,TextInput,TouchableOpacity } from 'react-native';
import styles from '../styles/style';

export default class Password extends Component{
    render(){
        return(
            <View style={styles.container}>
             <View style={styles.subcontainer}>
            <Text style={styles.contact}>Wprowadź hasło:  

</Text>
            <TextInput 
            style={styles.textInput}
            secureTextEntry
            placeholder="Enter Your Password"
            placeholderTextColor="#fff"
        //  onChangeText={(text)=> this.onChanged(text)}
            //value={this.state.myNumber}
              //setting limit of input
            />
             
             <TouchableOpacity
         style={styles.contactbutton}
         onPress={() => this.props.navigation.navigate('name')}
       >
         <Text style={styles.buttontext}> Submit</Text>
       </TouchableOpacity>
       
</View>    

</View>

        );
    }
}
 