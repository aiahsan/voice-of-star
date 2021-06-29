import React, { Component } from 'react';
import { 
    View,
    Text
 } from 'react-native';
 import Bottom_Tab_Bar from '../../Components/Bottom_Tab_Bar';
 
 export default function InboxScreen(){
     return(
        <View style={{ flex:1, backgroundColor:"transparent" }} >
            <View style={{ flex:1 , alignItems:'center' , justifyContent:'center' }} >
               <Text>InboxScreen</Text>
            </View>

         </View>
     )
 }