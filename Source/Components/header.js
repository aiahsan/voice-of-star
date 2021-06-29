import React from 'react';
import {View,StyleSheet,Text,TouchableOpacity} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native'
export default({title})=>
{
    const navigation=useNavigation();

    return <View style={{ 
        flexDirection:'row',
        //alignContent:'center',
        alignItems:'center',
        justifyContent:'flex-start',
           height:80,backgroundColor:'#ed1c24',paddingLeft:10,paddingRight:10,paddingTop:20}}>
               <TouchableOpacity onPress={()=>navigation.goBack()}>
               <Ionicons name="md-arrow-back" size={24} color="white" />
               </TouchableOpacity>
    <Text style={{color:'white',marginLeft:'20%',fontSize:18}}>{title}</Text>
    
    </View>
}
