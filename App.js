import React, { Component } from 'react';
import {  View, } from 'react-native';
import {createAppContainer, createSwitchNavigator } from 'react-navigation';
import Profilname from './compnents/Profilename';
import Contact from './compnents/contact';
import Message from './compnents/sms';
import Email from './compnents/email';
import Password from './compnents/password';
import FullName from './compnents/Name';
import Terms from './compnents/terms';
export default class App extends Component{
  render(){
      return(
       
<AppContainer/>

        );
      }
  }
   


const TabNavigator = createSwitchNavigator({
  profile: Profilname,
  contact:Contact,
  message:Message,
  email:Email,
  password:Password,
  name:FullName,
  terms:Terms,

 
});

const AppContainer=createAppContainer(TabNavigator);

