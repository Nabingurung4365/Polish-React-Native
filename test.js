import React from 'react';
import { StyleSheet, Button,Text, View,TextInput } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

class HomeScreen extends React.Component {
  render() {
    return (
     
     <View style={styles.container}>
          

        <TextInput placeholder="Username"
        style={{height: 50,borderWidth: 1,marginBottom:20,color:'#fff'}}/>
        <TextInput placeholder="Password"
        style={{height: 40,borderWidth: 1,color:'#fff'}}/>
       <Button
  style={{paddingVertical:20}}
  title="Submit"
  color="#841584"
  accessibilityLabel="Learn more about this purple button"
/>

      </View>
    
    );
  }
}

class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }
}
class About extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>About!</Text>
      </View>
    );
  }
}
const styles=StyleSheet.create({
  container:{
   padding:20,
   backgroundColor:'#2980b9'
  },
});

const TabNavigator = createBottomTabNavigator({
  Home: HomeScreen,
  Settings: SettingsScreen,
  AboutUs:About,
});

export default createAppContainer(TabNavigator);


