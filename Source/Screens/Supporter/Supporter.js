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
 import { Card, Title, Button, Drawer , Checkbox } from "react-native-paper";
 import { useNavigation } from "@react-navigation/native";
 import FirstScreenContent from '../../Components/Screen Content/First_ScreenContent';
 import SecondScreenContent from '../../Components/Screen Content/Second_ScreenContent';
 import ThirdScreenContent from '../../Components/Screen Content/Third_ScreenContent';
 import FourthScreenContent from '../../Components/Screen Content/Fourth_ScreenContent';
 import FifthScreenContent from '../../Components/Screen Content/Fifth_ScreenContent';
 import SixthScreenContent from '../../Components/Screen Content/Sixth_ScreenContent';
 import CardSilder from 'react-native-cards-slider';
 import CarCard from '../../Components/carCard'

 export default function Candidator(){


    const [checked , Setchecked] = useState(false);
    const [Survey , SetSurvey] = useState(false)
    const [videos,setVideos]=useState([{},{},{},{},{},{},{},{},{},{},{},{}])
    const navigator = useNavigation();


     return(
    
        <View style={styles.container}>
          
            <View style={styles.First}>
                <Ionicons name="ios-menu" size={30} color="black" style={{ alignSelf:'center' }} onPress={()=> navigator.openDrawer()} />
                <Image source={require('../../Images/logovertical.png')} style={{ width:200 , height:50 , marginLeft:'6%' , alignSelf:'center' }}  />
                <MaterialIcons name="live-tv" size={30} color="black" style={{ alignSelf:'center' , marginLeft:'8%' }} onPress={() => alert('Live Coverage')}  />
                <FontAwesome5 name="search" size={25} color="black" style={{ alignSelf:'center' , marginLeft:'3%' }} onPress={() => alert('Search')} />
                <Entypo name="share" size={24} color="black" style={{ alignSelf:'center' , marginLeft:'3%' }}  onPress={() => alert('Share with your')} />
            </View>
          
            <View style={styles.Second}>
            <Checkbox
                    uncheckedColor='white'
                        status={checked ? 'checked' : 'unchecked'}
                        color='white'
                        onPress={() => {
                            Setchecked(!checked);
                        }}
                 />
                <Text style={{ color:'white', fontSize:18 , fontWeight:'bold' , fontFamily:'serif' , backgroundColor:'#800000' }}>0 1 2 3 4 5 6 7 8 9</Text>
           
                <TouchableOpacity
                        onPress={() => navigator.navigate('Provinces_Page')}     
                        style={{  marginLeft:'7%', marginRight:'7%', backgroundColor:'white' , borderRadius:5 }} >
                <Text style={{ color:'red' ,fontSize:14 , fontWeight:'bold' , fontFamily:'serif'  }}>
                            Pakistan
                </Text>
           </TouchableOpacity>
                <Checkbox
                style={{ marginRight:"3%" }}
                uncheckedColor='white'
                status={Survey ? 'checked' : 'unchecked'}
                color='white'
                onPress={() => {
                    SetSurvey(!Survey);
                }}
                />
                 <Text style={{ color:'white', fontSize:18 , fontWeight:'bold' , fontFamily:'serif'  }}>
                   Today's Survey
                </Text>
            </View>

            <CardSilder>
               <CarCard></CarCard>
               <CarCard></CarCard>
               <CarCard></CarCard>
            </CardSilder>
            </View>


     
     );
 }

 const styles = StyleSheet.create({
     container:{
         top:24,
         flex:1,
         backgroundColor:'white',
         paddingBottom:'7%'
     },
     First:{
         flex:0.08,
         borderWidth:2,
         borderColor:'red',
         flexDirection:'row',
         alignContent:'center',
         paddingLeft:'3%'
     },
     Second:{
        flex:0.05,
        backgroundColor:'red',
        justifyContent:'center',
        flexDirection:'row',
        alignItems:'center'
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