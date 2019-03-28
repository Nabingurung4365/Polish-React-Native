import React, { Component } from 'react';
import {  Text, View,TextInput,TouchableOpacity} from 'react-native';
import styles from '../styles/style';
import { CheckBox } from 'react-native-elements';
export default class Terms extends Component{
    constructor(props){
        super(props)
        this.state={isTrue: true}
    }
    fromUpdate(newState){
        this.setState(newState)
    }
    render(){
        return(
            <View style={styles.container}>
            <TextInput 
            style={styles.terms}
            placeholderTextColor="#fff"
            />
            {/* <CheckBox
  title='Click Here'
   onPress={()=>this.formUpdate({isTrue:!this.state.isTrue})}
  checked={this.state.isTure}
/> */}
            
<CheckBox
  label='Label'
  checked={true}
  onChange={(checked) => console.log('I am checked', checked)}
/> 
             <TouchableOpacity
         style={styles.contactbutton}
         onPress={() => this.props.navigation.navigate('message')}
       >
      <Text style={styles.buttontext}> Submit</Text>
       </TouchableOpacity>
      

         
</View>    

        );
    }
}
 