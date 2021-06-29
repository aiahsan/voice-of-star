import React, { Component } from 'react';
import { 
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import Candidator_Page from '../Candidate/Candidator';
import { useNavigation } from "@react-navigation/native";


export default function HomeScreen(){
    const navigator = useNavigation();
     return(
        <View style={{ flex:1  , backgroundColor:'white'}} >
                <View style={{ flex:1 , alignItems:'center' , justifyContent:'center',paddingTop:'30%' }} >
                    <Image source={require('../../Images/logo.png')} resizeMode="stretch" style={{ width:'50%' , height:'50%' , }} resizeMode="stretch" />
                </View>
                <View style={{ flex:1 , alignItems:'center'  }} >    
                    <TouchableOpacity  onPress={() => navigator.navigate('Candidate_Form_Page')} style={{ borderRadius:8 , width:'60%' , height:35, alignItems:'center',flexDirection:'row' , justifyContent:'space-evenly'  , backgroundColor:'black'}} >
                        <Image source={require('../../Images/img.png')} style={{width:50 , height:25 }} />
                        <Text style={{ fontSize:24  , fontWeight:'bold' , color:'white' }} > Candidate </Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity onPress={() => navigator.navigate('Supporter_Form_Page')} style={{ borderRadius:8 ,width:'60%' , height:35, alignItems:'center', flexDirection:'row' , justifyContent:'space-evenly', marginTop:'5%'  , backgroundColor:'black'}} >
                    <Image source={require('../../Images/img.png')} style={{width:50 , height:25 }} />
                        <Text style={{ fontSize:24  , fontWeight:'bold' , color:'white' }} > Supporter </Text>
                    </TouchableOpacity>
         
            </View>
         </View>
     );
 }




 /*
 <View style={{ flex:0.2 , justifyContent:'flex-end' , marginBottom:'3%' }} >
                <Bottom_Tab_Bar />
            </View>


            
 */