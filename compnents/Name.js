import React, { Component } from 'react';
import {  Text, View,TextInput,TouchableOpacity } from 'react-native';
import styles from '../styles/style';

export default class FullName extends Component{
    render(){
        return(
            <View style={styles.container}>
             <View style={styles.subcontainer}>
            <Text style={styles.contact}>Jak się nazywasz?

</Text>
            <TextInput 
            style={styles.textInput}
            secureTextEntry
            placeholder="Your Full Name"
            placeholderTextColor="#fff"
        //  onChangeText={(text)=> this.onChanged(text)}
            //value={this.state.myNumber}
              //setting limit of input
            />
             
             <TouchableOpacity
         style={styles.contactbutton}
         onPress={() => this.props.navigation.navigate('terms')}
       >
         <Text style={styles.buttontext}> Submit</Text>
       </TouchableOpacity>
       
</View>    

</View>

        );
    }
}
 