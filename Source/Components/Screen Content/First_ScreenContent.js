import React, { Component, useState } from 'react';
import { 
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    ScrollView
 } from 'react-native';
 import { Ionicons, MaterialIcons , FontAwesome5 , Entypo , FontAwesome , AntDesign } from '@expo/vector-icons'; 
 import { Card, Title, Button, Drawer } from "react-native-paper";
 import { useNavigation } from "@react-navigation/native";
 import Carousel from "react-native-snap-carousel";
 import * as Animatable from 'react-native-animatable';

 export default function ScreenContents({title,rank,vote,like,unlike,view,img}){

  

     return(
        <TouchableOpacity style={{ width:'100%'  ,height:'100%'}} onPress={() => alert('Rahat Fateh Ali Khan')}>
             <Card style= {{ width:'100%', height:'100%' , elevation:8, borderRadius:-5 , alignSelf:'center' }}>
               
               <Card.Title style={{ marginTop:'-10%' , marginBottom:'-10%' }}
                        title={title} 
                        titleStyle={{fontSize:12 , fontFamily:'serif' , fontWeight:'bold' , color:'black'}} 
                        right={() =>
                        <View style={{ flexDirection:'row'}} >
                            <TouchableOpacity style={{   alignItems:'center' }} onPress={() => alert('Download it!')} >
                                <FontAwesome name="cloud-download" size={24} color="green" />
                                <Text style={{fontSize:8 , fontFamily:'serif' , fontWeight:'300' , color:'black'}}>Download</Text>
                            </TouchableOpacity>     
                            <Text>  </Text>
                            <TouchableOpacity style={{ alignItems:'center' }} onPress={() => alert('Upload it!')}>
                                    <Entypo name="upload-to-cloud" size={24} color="blue" />
                                    <Text style={{fontSize:8 , fontFamily:'serif' , fontWeight:'300' , color:'black'}}>Upload</Text>
                            </TouchableOpacity>
                        </View>
                        }
               />
            
                <Card.Cover source={img} style={{ width:'100%' , height:'55%' }}  />
            
                <Card.Content style={{ flexDirection:'row' , marginTop:'2%' }} >
                    <Text style={{ fontSize:16 , fontFamily:'serif' , fontWeight:'bold', paddingRight:5 , color:'black' , marginLeft:-10 , borderRightWidth:2 , borderRightColor:'#b3b3b3' }} >{rank}</Text>
                    <Text style={{ fontSize:14 , alignSelf:'center',marginLeft:'15%' ,fontFamily:'serif' , fontWeight:'bold' , color:'#b3b3b3' }}>Votes: {vote}</Text>
                </Card.Content>
            
                <Card.Content style={{flexDirection:'row' , justifyContent:'space-between' , marginTop:'3%' }} >
            
                <TouchableOpacity style={{flexDirection:'row'}} onPress={() => alert('like it')} >
                            <AntDesign name="like1" size={16} color="#b3b3b3"  />
                            <Text style={{fontSize:12, fontFamily:'serif' , fontWeight:'300' , color:'#b3b3b3'}} > {like} </Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={{flexDirection:'row'}} onPress={() => alert('Unlike it')} >
                        <AntDesign name="dislike1" size={16} color="#b3b3b3"  />
                        <Text style={{fontSize:12, fontFamily:'serif' , fontWeight:'300' , color:'#b3b3b3' }} > {unlike} </Text>
                </TouchableOpacity>
                    
                <MaterialIcons name="live-tv" size={20} color="#b3b3b3" style={{ marginLeft:'15%' , marginTop:'-3%' }} />
                
                <Entypo name="eye" size={20} color="#b3b3b3" style={{ marginLeft:'5%' , marginTop:'-3%' }}   />
                <Text style={{fontSize:12, fontFamily:'serif' , fontWeight:'300', color:'#b3b3b3'}} > {view} </Text>
        
            </Card.Content>
           
            </Card>
        </TouchableOpacity>
     )
 }

 /**
  * 
  *  <Card.Content style={{ flexDirection:'row' , alignItems:'center', justifyContent:'space-between' , marginTop:'-10%' }}>
                    <Title style={{fontSize:12 , fontFamily:'serif' , fontWeight:'bold' , color:'black'}} >{Titles}</Title>
               
                <TouchableOpacity style={{  marginLeft:'25%' , alignItems:'center' }} onPress={() => alert('Download it!')} >
                            <FontAwesome name="cloud-download" size={24} color="green" />
                            <Text style={{fontSize:8 , fontFamily:'serif' , fontWeight:'300' , color:'black'}}>Download</Text>
                </TouchableOpacity>     
                
                <TouchableOpacity style={{  marginLeft:'3%' , alignItems:'center' }} onPress={() => alert('Upload it!')}>
                        <Entypo name="upload-to-cloud" size={24} color="blue" />
                        <Text style={{fontSize:8 , fontFamily:'serif' , fontWeight:'300' , color:'black'}}>Upload</Text>
                </TouchableOpacity>  
                </Card.Content>
  */