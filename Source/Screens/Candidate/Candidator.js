import React, { Component, useState,useContext } from 'react';
import { 
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    ScrollView
 } from 'react-native';
 import { Ionicons, MaterialIcons , FontAwesome5 , Entypo , FontAwesome , AntDesign } from '@expo/vector-icons'; 
 import { Card, Title, Button, Drawer  ,Checkbox } from "react-native-paper";
 import { useNavigation } from "@react-navigation/native";
 import CardSilder from 'react-native-cards-slider';
 import CarCard from '../../Components/carCard'
import CstCard from '../../Components/Screen Content/card';
import StateContext from '../../context';

 export default function Candidator(){


    const [checked , Setchecked] = useState(false);
    const [Survey , SetSurvey] = useState(false)
    const [videos,setVideos]=useState([{},{},{},{},{},{},{},{},{},{},{},{}])
    const navigator = useNavigation();
    const stateContext=useContext(StateContext);

    const Label = 'farooq'

     return(
    
        <View style={styles.container}>
          
            <View style={styles.First}>
                <Ionicons name="ios-menu" size={30} color="black" style={{ alignSelf:'center' }} onPress={()=> navigator.openDrawer()} />
                <Image source={require('../../Images/logovertical.png')} style={{ width:'40%' , height:'85%'  , alignSelf:'center' }} resizeMode="stretch"  />
                <Image source={require('../../Images/liv.png')} style={{ width:'13%' , height:'40%'  , alignSelf:'center',marginRight:5 }} resizeMode="stretch"  />
                <FontAwesome5 name="search" size={25} color="black" style={{ alignSelf:'center'  }} onPress={() => alert('Search')} />
                <Entypo name="share" size={24} color="black" style={{ alignSelf:'center' }}  onPress={() => alert('Share with your')} />
            </View>
          
            <View style={styles.Secondcst}>
            <View style={{flex:1,justifyContent:'center',flexDirection:'row'}}>
                 <Checkbox
uncheckedColor='white'
    status={checked ? 'checked' : 'unchecked'}
    color='white'
    onPress={() => {
        Setchecked(!checked);
    }}/><Text numberOfLines={1} ellipsizeMode="tail" style={{marginTop:9,width:'70%',color:'white',fontSize:14}}>123456789</Text>
            </View>

            <View style={{flex:1,justifyContent:'center',flexDirection:'row'}}>
            <TouchableOpacity
    onPress={() => navigator.navigate('Provinces_Page')}     
    style={{marginTop:6,marginBottom:10,paddingLeft:4,paddingRight:4,borderRadius:5}}
    >
<Text numberOfLines={1} ellipsizeMode="tail" style={{marginTop:3,color:'white',marginBottom:0}}>
       {stateContext.currentState}
</Text>
</TouchableOpacity>
                
            </View>
            <View style={{flex:1,justifyContent:'center',flexDirection:'row'}}>
                 <Checkbox
uncheckedColor='white'
    status={checked ? 'checked' : 'unchecked'}
    color='white'
    onPress={() => {
        Setchecked(!checked);
    }}/><Text numberOfLines={1} ellipsizeMode="tail" style={{marginTop:9,width:'70%',color:'white',fontSize:14}}>Today Survey</Text>
            </View>
            </View>

            <ScrollView style={{marginBottom:'22%'}}>
                    <View style={{flex:1,justifyContent:'center',flexDirection:'row',}}>
                    
                    <View style={{flex:.5}}>
                    <CstCard title="VOS 0941 Rahat Fak" img={require('../../Images/Rahat.jpg')}  rank="1" raw="st" vote="20" />

                    </View>
                       
                    <View style={{flex:.5}}>
                    <CstCard title="VOS 0942 Momina Mus" img={require('../../Images/Momina.jpg')}  rank="2" raw="nd" vote="15" />

                    </View>
                       

                    </View>
                    <View style={{flex:1,justifyContent:'center',flexDirection:'row',}}>
                    
                    <View style={{flex:.5}}>
                    <CstCard title="VOS 0941 Abida Parveen" img={require('../../Images/AbidaParveen.jpg')}  rank="3" raw="rd" vote="20" />

                    </View>
                       
                    <View style={{flex:.5}}>
                    <CstCard title="VOS 0942 ALi Zafar" img={require('../../Images/Alizafar.jpg')}  rank="4" raw="th" vote="15" />

                    </View>
                       

                    </View>
                    <View style={{flex:1,justifyContent:'center',flexDirection:'row',}}>
                    
                    <View style={{flex:.5}}>
                    <CstCard title="VOS 0941 Atif Aslam" img={require('../../Images/AtifAslam.jpg')}  rank="5" raw="th" vote="20" />

                    </View>
                       
                    <View style={{flex:.5}}>
                    <CstCard title="VOS 0942 Annnie" img={require('../../Images/Annie.jpg')}  rank="6" raw="th" vote="15" />

                    </View>
                       

                    </View>

                    <View style={{flex:1,justifyContent:'center',flexDirection:'row',}}>
                    
                    <View style={{flex:.5}}>
                    <CstCard title="VOS 0941 Ali Azmat" img={require('../../Images/AliAzmat.jpeg')}  rank="7" raw="th" vote="20" />

                    </View>
                       
                    <View style={{flex:.5}}>
                    <CstCard title="VOS 0942 Gul Parna" img={require('../../Images/GulParna.jpg')}  rank="8" raw="th" vote="15" />

                    </View>
                       

                    </View>

                    <View style={{flex:1,justifyContent:'center',flexDirection:'row',}}>
                    
                    <View style={{flex:.5}}>
                    <CstCard title="VOS 0941 Hadiqa" img={require('../../Images/Hadiqa.jpeg')}  rank="9" raw="th" vote="20" />

                    </View>
                       
                    <View style={{flex:.5}}>
                    <CstCard title="VOS 0942 Annnie" img={require('../../Images/Annie.jpg')}  rank="10" raw="th" vote="15" />

                    </View>
                       

                    </View>
                    <View style={{flex:1,justifyContent:'center',flexDirection:'row',}}>
                    
                    <View style={{flex:.5}}>
                    <CstCard title="VOS 0941 Atif Aslam" img={require('../../Images/AtifAslam.jpg')}  rank="11" raw="th" vote="20" />

                    </View>
                       
                    <View style={{flex:.5}}>
                    <CstCard title="VOS 0942 Annnie" img={require('../../Images/Annie.jpg')}  rank="12" raw="th" vote="15" />

                    </View>
                       

                    </View>
            </ScrollView>
            </View>


     
     );
 }

 const styles = StyleSheet.create({
     container:{
         top:24,
        
         backgroundColor:'white',
         paddingBottom:'7%'
     },
     First:{
         
         borderColor:'red',
         flexDirection:'row',
         //alignContent:'center',
         alignItems:'center',
         paddingLeft:'3%',
         justifyContent:'space-between',
        paddingRight:'3%',
         height:50
        },
     Second:{
        height:30,
         backgroundColor:'red',
         justifyContent:'space-between',
         justifyContent: 'center',
         alignItems: 'center'
     },
     Secondcst:{
        height:40,
         backgroundColor:'red',
         justifyContent:'space-between',
         justifyContent: 'center',
         flexDirection:'row'
         
     },
     Third:{
        flex:1,
        flexDirection:'column',
        paddingBottom:'7%'
     },
     FirstBox:{
          flex:1,
          flexDirection:'row',
          backgroundColor:'transparent',
          padding:'1%',
        },

    SecondBox:{
        flex:1,
        flexDirection:'row',
        backgroundColor:'transparent',
        padding:'1%',
    },
    ThirdBox:{
        flex:1,
        flexDirection:'row',
        backgroundColor:'transparent',
        padding:'1%',
    },
    FirstCard:{
        width:'50%',
        height:'100%',
        backgroundColor:'transparent',
        padding:'1%'
    },
    SecondCard:{
        width:'50%',
        height:'100%',
        backgroundColor:'transparent',
        padding:'1%',
    },
   

 })

 /*
 <Card>
                    <Card.Content>
                        <Title>0123456</Title>
                        <Card.Cover source={require('../../Images/Rahat.jpg')}   />
                    </Card.Content>
                    <Card.Actions>
                        <Button>Like</Button>
                    </Card.Actions>
                  </Card>

                  
 */

 /*
 <View style={styles.Third}>
              
                <View style={styles.FirstBox}>
                    <View style={styles.FirstCard}>
                                <FirstScreenContent />
                        </View>
                        <View style={styles.SecondCard}>
                                <SecondScreenContent />
                        </View>
                   </View>
                
                <View style={styles.SecondBox}>
                <View style={styles.FirstCard}>
                            <ThirdScreenContent />
                    </View>
                    <View style={styles.SecondCard}>
                            <FourthScreenContent />
                    </View>
                </View>
                
                <View style={styles.ThirdBox}> 
                <View style={styles.FirstCard}>
                            <FifthScreenContent />
                    </View>
                    <View style={styles.SecondCard}>
                            <SixthScreenContent />
                    </View>
                </View>
            </View>
       
 */

 /*
<ScrollView horizontal >
            <Checkbox
uncheckedColor='white'
    status={checked ? 'checked' : 'unchecked'}
    color='white'
    onPress={() => {
        Setchecked(!checked);
    }}

    
/>
<Text style={{ color:'white', fontSize:14 , fontWeight:'bold' , fontFamily:'serif' ,paddingTop:8,textAlign:'center',justifyContent:'center'
 }}>0 1 2 3 4 5 6 7 8 9</Text>

<View  style={{backgroundColor:'white' , borderRadius:5 ,marginLeft:20,marginTop:8,marginBottom:3,marginRight:20}}>
<TouchableOpacity
    onPress={() => navigator.navigate('Provinces_Page')}     
    >
<Text style={{ color:'red' ,fontSize:14 , fontWeight:'bold' , fontFamily:'serif'  }}>
      All {stateContext.currentState}
</Text>
</TouchableOpacity>
    
</View>

<Checkbox

uncheckedColor='white'
status={Survey ? 'checked' : 'unchecked'}
color='white'
onPress={() => {
SetSurvey(!Survey);
}}
/>
<Text style={{ color:'white', fontSize:16 , fontWeight:'bold' , fontFamily:'serif',paddingTop:8,  }}>
Today's Survey
</Text>
        </ScrollView>
 */