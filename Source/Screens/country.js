import React,{useState,useContext} from 'react';
import {View,Text,TouchableOpacity,ScrollView} from 'react-native';
import Header from '../Components/header';
import { AntDesign } from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';
import StateContext from '../context';

export default()=>{
    
    const navigation=useNavigation();
    const stateContext=useContext(StateContext);

    const [States, setStates] = useState([{
     id:1,
     state:'Azad Jammu & Kashmir',
     cities:[
         {id:1,
        city:'City 1'},

     ]   
    },
    {
        id:1,
        state:'Balochistan',
        cities:[
            {id:1,
           city:'City'},
   
        ]   
       },{
        id:1,
        state:'FATA',
        cities:[
            {id:1,
           city:'City'},
   
        ]   
       },{
        id:1,
        state:'Gilgit-Baltistan',
        cities:[
            {id:1,
           city:'City'},
   
        ]   
       },{
        id:1,
        state:'Islamabad Capital-Teritory',
        cities:[
            {id:1,
           city:'City'},
   
        ]   
       },{
        id:1,
        state:'Khyber Pakhtunkhwa',
        cities:[
            {id:1,
           city:'City'},
   
        ]   
       },{
        id:1,
        state:'Punjab',
        cities:[
            {id:1,
           city:'City'},
   
        ]   
       },{
        id:1,
        state:'Sindh',
        cities:[
            {id:1,
           city:'City'},
   
        ]   
       }]);

     const  handleSelect=()=>{
        stateContext.setcurrentState("Pakistan");
        navigation.navigate("Candidator")
       }
    return <View style={{flex:1}}>
    <Header title="Select Region to Cast Vote"/>
  <ScrollView>
  <TouchableOpacity onPress={()=>handleSelect()} style={{width:'95%',height:60,marginLeft:'auto',marginRight:'auto',marginTop:20}}>
               <View style={{flex:1,borderWidth:1,borderColor:'#cacaca',borderRadius:15,justifyContent:'center',alignItems:'center',paddingTop:10}}>
        <Text style={{fontSize:18,color:'#717171',fontWeight:'bold'}}>All Pakistan</Text>
               </View>
            </TouchableOpacity>
    {
        
        States.map(x=>
            <TouchableOpacity style={{ 
                flexDirection:'row',
                //alignContent:'center',
                alignItems:'center',
                justifyContent:'space-between',
                width:'95%',marginLeft:'auto',marginRight:'auto',borderBottomColor:'#e0e0e0',borderBottomWidth:1,
                paddingTop:15,
                paddingBottom:15
                  }} onPress={()=>navigation.navigate("City_Page",x)} >
                       
            <Text style={{marginLeft:'5%',fontSize:18,color:'#717171',fontWeight:'bold'}}>{x.state}</Text>
            <AntDesign name="right" size={24} color="black" />
            </TouchableOpacity>
           )
    }
  </ScrollView>
</View>
}

/*
 <TouchableOpacity style={{}}>
               <View style={{flex:1,borderBottomColor:'#e0e0e0',borderBottomWidth:1,justifyContent:'center',alignItems:'center',flexDirection:'column',paddingTop:10}}>
       <View style={{flex:1}}>
       <Text style={{flex:1}} >{x.state}</Text>

       </View>
      
               </View>
            </TouchableOpacity>
*/