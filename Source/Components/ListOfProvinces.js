
import React,{useState,useContext} from 'react';
import {View,Text,TouchableOpacity,ScrollView} from 'react-native';
import Header from '../Components/header';
import { AntDesign } from '@expo/vector-icons';
import {TextInput} from 'react-native-paper';
import StateContext from '../context';
import {useNavigation} from '@react-navigation/native'
export default({route})=>{
    const stateContext=useContext(StateContext);
const navigation=useNavigation();
    const  handleSelect=(city)=>{
        stateContext.setcurrentState(city);
        navigation.navigate("Candidator")
       }
    return <View style={{flex:1}}>
    <Header title="Select Region to Cast Vote"/>
  <ScrollView>
 
  <View style={{ 
        flexDirection:'row',
        //alignContent:'center',
        alignItems:'center',
        justifyContent:'flex-start',
         paddingLeft:10,paddingRight:10,paddingTop:20}}>
               
<View style={{flex:1,borderWidth:1,borderRadius:15,borderColor:'#e0e0e0',}}>
    <TextInput style={{backgroundColor:'transparent'}}  mode="flat"/>
    </View>
    <View style={{flex:1,borderWidth:1,borderRadius:15,borderColor:'#e0e0e0',marginLeft:10}}>
    <TouchableOpacity style={{ 
                flexDirection:'row',
                //alignContent:'center',
                alignItems:'center',
                justifyContent:'space-between',
                width:'95%',marginLeft:'auto',marginRight:'auto',
                paddingTop:'10%',
                paddingBottom:'15%'
                  }} onPress={()=>handleSelect(route.params.state)}>
                       
                <Text numberOfLines={1} ellipsizeMode="tail" style={{width:'90%',marginLeft:'5%',fontSize:18,color:'#717171',fontWeight:'bold'}}>All {route.params.state}</Text>
            </TouchableOpacity>
                </View>        
    </View>

  {(route.params?route.params.cities.map(x=>
            <TouchableOpacity style={{ 
                flexDirection:'row',
                //alignContent:'center',
                alignItems:'center',
                justifyContent:'space-between',
                width:'95%',marginLeft:'auto',marginRight:'auto',borderBottomColor:'#e0e0e0',borderBottomWidth:1,
                paddingTop:15,
                paddingBottom:15
                  }}  onPress={()=>handleSelect(x.city)} >
                       
            <Text  style={{marginLeft:'5%',fontSize:18,color:'#717171',fontWeight:'bold'}}>{x.city}</Text>
            <AntDesign name="right" size={24} color="black" />
            </TouchableOpacity>
           ):<></>)

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
/*
import React, { Component } from 'react';
import { 
    View,
    Text
 } from 'react-native';
 import { List } from 'react-native-paper';

 export default function List_Provinces(){

    const [expanded1, setExpanded1] = React.useState(true);
    const handlePress1 = () => setExpanded1(!expanded1);
    
    const [expanded2, setExpanded2] = React.useState(true);
    const handlePress2 = () => setExpanded2(!expanded2);

    const [expanded3, setExpanded3] = React.useState(true);
    const handlePress3 = () => setExpanded3(!expanded3);

    const [expanded4, setExpanded4] = React.useState(true);
    const handlePress4 = () => setExpanded4(!expanded4);

    const [expanded5, setExpanded5] = React.useState(true);
    const handlePress5 = () => setExpanded5(!expanded5);

     return(
         <View style={{ flex:1 , paddingTop:'15%'  , padding:'9%' }} >
                <List.Section title="List of Provices and cities" titleStyle={{fontSize:25 , fontFamily:'serif' , fontWeight:'bold'}} >
                    <List.Accordion
                        title="Sindh"
                        left={props => <List.Icon {...props} icon="folder" />}
                        expanded={expanded1}
                        onPress={handlePress1}>
                        <List.Item title="Karachi" />
                        <List.Item title="Hyderabad" />
                    </List.Accordion>

                    <List.Accordion
                        title="Punjab"
                        left={props => <List.Icon {...props} icon="folder" />}
                        expanded={expanded2}
                        onPress={handlePress2}>
                        <List.Item title="Lahore" />
                        <List.Item title="Faisalabad" />
                    </List.Accordion>

                    <List.Accordion
                        title="Khyber Pakhtun Khuwan KPK"
                        left={props => <List.Icon {...props} icon="folder" />}
                        expanded={expanded3}
                        onPress={handlePress3}>
                        <List.Item title="Peshawar" />
                        <List.Item title="Balakot" />
                    </List.Accordion>

                    <List.Accordion
                        title="Balochistan"
                        left={props => <List.Icon {...props} icon="folder" />}
                        expanded={expanded4}
                        onPress={handlePress4}>
                        <List.Item title="Quetta" />
                        <List.Item title="Chaman" />
                    </List.Accordion>

                    <List.Accordion
                        title="FATA"
                        left={props => <List.Icon {...props} icon="folder" />}
                        expanded={expanded5}
                        onPress={handlePress5}>
                        <List.Item title="Fata 1" />
                        <List.Item title="Fata 2" />
                    </List.Accordion>
                </List.Section>
         </View>
        
     );
 }
 */