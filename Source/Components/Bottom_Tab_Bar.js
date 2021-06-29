import React, { Component } from 'react';
import { 
    View,
    Text,
    StyleSheet,
    TouchableOpacity
 } from 'react-native';
 import { AntDesign , Entypo , Feather , MaterialCommunityIcons } from '@expo/vector-icons'; 
 import { useNavigation } from "@react-navigation/native";

 export default function BottomTabBar(){

    const navigator = useNavigation();
     return(
        <View style={styles.container} >

            <TouchableOpacity style={styles.First} onPress={() => navigator.navigate('Home_Page')}>
                <View>
                    <AntDesign name="home" size={24} color="black" />
                    <Text style={styles.txt}>
                        Home
                    </Text>
                </View>
            </TouchableOpacity>
        
            <TouchableOpacity style={styles.First} onPress={() => navigator.navigate("Inbox_Page")} >
                <View>
                    <Entypo name="inbox" size={24} color="black" />
                    <Text style={styles.txt}>
                        Inbox
                    </Text>
            
                </View>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.First} onPress={() => navigator.navigate("Activity_Page")}>
                <View>
                    <Feather name="activity" size={24} color="black" />
                    <Text style={styles.txt}>
                        Activity
                    </Text>
                </View>
            </TouchableOpacity>
        
            <TouchableOpacity style={styles.First} onPress={() => navigator.navigate("Profile_Page")}>
                <View>
                    <MaterialCommunityIcons name="face-recognition" size={24} color="black" />
                    <Text style={styles.txt}>
                        Me
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
     );
 }

 const styles = StyleSheet.create({
     container:{
         flex:0.5,
         flexDirection:'row',
         justifyContent:'space-between',
     },
     First:{
         flex:1,
         alignItems:'center',
         justifyContent:"flex-end",
     },
     txt:{
         fontSize:12,
         fontFamily:'serif',
         fontWeight:'400' ,
         color:'black',
         alignSelf:'center'
     }
 })