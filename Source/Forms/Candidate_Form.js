import React, { Component, useState } from 'react';
import GradientButton from 'react-native-gradient-buttons';

import { 
    View,
    Text,
    ScrollView,Image,
    TouchableOpacity
 } from 'react-native';
 import { TextInput , Checkbox , Menu  ,Button  , Divider , Provider,List } from 'react-native-paper';
 import { useNavigation } from "@react-navigation/native";
import { color } from 'react-native-reanimated';

import { AntDesign,Feather,MaterialCommunityIcons } from '@expo/vector-icons';
 export default function Candidate_Form(){

    const [FirstName , SetFirstName ] = useState('');
    const [LastName , SetLastName ] = useState('');
    const [Phone , SetPhone ] = useState('');
    const [Email , SetEmail ] = useState('');
    const [Password , SetPassword ] = useState('');


    const [expanded, setExpanded] = React.useState(true);

    const handlePress = () => setExpanded(!expanded);
    const [Services , SetServices] = useState([{
        id: 1,
        Ischecked:false,
        label:'Singer'
    },
    {
        id: 12,
        Ischecked:false,
        label:'Musician'
    },
    {
        id: 3,
        Ischecked:false,
        label:'Host'
    },
    {
        id: 4,
        Ischecked:false,
        label:'Judge'
    },
    {
        id: 5,
        Ischecked:false,
        label:'Ustaad'
    }
]) 
        const Check_Box = ({id,checked,handleChange,label})=>
        <Checkbox.Item
            uncheckedColor='white'
            color='white'
            label={label}
            labelStyle={{ color:'white', fontSize:14 , fontWeight:'300' , fontFamily:'serif'  }}
            status={(checked==true?"checked":"unchecked")}
            onPress={() => {
                //setChecked1(!checked1);
            handleChange(id)
        }}
        />
        const handleCheckChange=(id)=>{
          
            const oldservices=Services;
            const index=oldservices.findIndex(x=>x.id==id);
            console.log(index);
            oldservices.map(x=>x.Ischecked=false);
            oldservices[index].Ischecked=true;
            
            SetServices(oldservices);
            
         }
  
    const navigator = useNavigation();



     return(
       <View style={{backgroundColor:'white'}}>
            <View style={{ justifyContent:'center',paddingLeft:10 ,backgroundColor:'white',marginTop:'50%'}} >
          <Text style={{fontSize:35,fontWeight:'bold'}}>Candidate</Text>
          <Text style={{fontSize:18,color:'#949695'}}>Input required details to continue</Text>
          <ScrollView style={{marginBottom:'20%'}}>
         <View style={{flex:1,justifyContent:'flex-start',flexDirection:'row',height:100}}>
             <View style={{flex:.1,justifyContent:'center',marginTop:'10%'}}>
             <AntDesign name="user" size={24} color="black" />

             </View>

            <View style={{flex:.8}}>
            <TextInput
      label="First Name"
     style={{marginTop:'15%',backgroundColor:'white'}}
     
    />
            </View>
         </View>
    
         <View style={{flex:1,justifyContent:'flex-start',flexDirection:'row',marginTop:'-10%'}}>
             <View style={{flex:.1,justifyContent:'center',marginTop:'10%'}}>
             <AntDesign name="user" size={24} color="black" />

             </View>

            <View style={{flex:.8}}>
            <TextInput
      label="Last Name"
     style={{marginTop:'15%',backgroundColor:'white'}}
     
    />
            </View>
         </View>

         <View style={{flex:1,justifyContent:'flex-start',flexDirection:'row',marginTop:'-10%'}}>
             <View style={{flex:.1,justifyContent:'center',marginTop:'10%'}}>
             <Feather name="phone" size={24} color="black" />
             </View>

            <View style={{flex:.8}}>
            <TextInput
      label="Phone number"
     style={{marginTop:'15%',backgroundColor:'white'}}
     
    />
            </View>
         </View>
         <View style={{flex:1,justifyContent:'flex-start',flexDirection:'row',marginTop:'-10%'}}>
             <View style={{flex:.1,justifyContent:'center',marginTop:'10%'}}>
             <MaterialCommunityIcons name="email-multiple-outline" size={24} color="black" />
             </View>

            <View style={{flex:.8}}>
            <TextInput
      label="Email"
     style={{marginTop:'15%',backgroundColor:'white'}}
     
    />
            </View>
         </View>
         <View style={{flex:1,justifyContent:'flex-start',flexDirection:'row',marginTop:'-10%'}}>
             <View style={{flex:.1,justifyContent:'center',marginTop:'10%'}}>
             <MaterialCommunityIcons name="textbox-password" size={24} color="black" />
             </View>

            <View style={{flex:.8}}>
            <TextInput
      label="Password"
     style={{marginTop:'15%',backgroundColor:'white'}}
     
    />
            </View>
         </View>
         <View style={{}}>
         <List.Section title="Categories">
      <List.Accordion
        title="Available Categories"
        left={props => <List.Icon {...props} icon="folder"  />}>
            {Services.map(x=> <List.Item  title={x.label} onPress={()=>handleCheckChange(x.id)} titleStyle={{color:x.Ischecked?'white':"black"}} style={{backgroundColor:x.Ischecked==true?"black":'white'}}   />)}
       
        
      </List.Accordion>

      
    </List.Section>
         </View>  
         <View>
         <GradientButton
      style={{ marginVertical: 8 }}
      textStyle={{ fontSize: 20 }}
      gradientBegin="#ed1c24"
      
      gradientEnd="#6b090c"
      gradientDirection="diagonal"
      height={60}

      radius={15}
      impact
      impactStyle='Light'

      onPressAction={() => navigator.navigate('Candidator')}
    >
      Login
    </GradientButton>
             </View>  
         </ScrollView>
        </View>
        <View style={{position:'absolute',right:'-1%',top:'5%'}}>
            <Image  style={{width:140,height:140}} resizeMode="stretch"       source={require('../Images/mobileicon.png')}
/>
        </View>
       </View>
     );
 }


 /*

   <View style={{ flex:0.6  , justifyContent:'center' , padding:'8%' , alignItems:'center' }}>
                <Text style={{ fontSize:25 , fontWeight:'bold' , fontFamily:'serif' , color:'#004080' , marginTop:'10%' }} > Candidate Form</Text>
            </View>
            <ScrollView>
            
                <View style={{ flex:0.6 , backgroundColor:'#004080' , justifyContent:'center' , padding:'8%' , margin:'5%' , borderRadius:25}} >
            <TextInput
                label="First Name"
                value={FirstName}
                onChangeText={FirstName => SetFirstName(FirstName)}
                
                />
            <TextInput
                label="Last Name"
                value={LastName}
                onChangeText={LastName => SetLastName(LastName)}
                style={{ marginTop:'5%' }}
            />
            <TextInput
                label="Phone"
                value={Phone}
                onChangeText={Phone => SetPhone(Phone)}
                style={{ marginTop:'5%' }}

            />
            <Text style={{ fontSize:24 , fontWeight:'bold' , fontFamily:'serif' , color:'white' }} >
                Categories
            </Text>
            {
                                   Services.map(x=><Check_Box  id={x.id} label={x.label} checked={x.Ischecked} handleChange={handleCheckChange}/>)
            }
            <TextInput
                label="Email"
                value={Email}
                onChangeText={Email => SetEmail(Email)}
                style={{ marginTop:'5%' }}

            />
            


            <TextInput
                label="Password"
                value={Password}
                onChangeText={Password => SetPassword(Password)}
                style={{ marginTop:'5%' }}
                secureTextEntry={true}

            />
                
            </View>
            
                <View style={{ flex:0.2 , justifyContent:'center' , alignItems:'center'  }}>
                    <TouchableOpacity 
                            onPress={() => navigator.navigate('Candidator')}
                            style={{width:'35%' , marginTop:'18%' , marginBottom:'15%' , height:50 , backgroundColor:'#00264d' , alignItems:'center' , justifyContent:'center'}} >
                            <Text style={{ fontSize:22 , fontFamily:'serif' , fontWeight:'bold' , color:'white' }} >Enter</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>

            */