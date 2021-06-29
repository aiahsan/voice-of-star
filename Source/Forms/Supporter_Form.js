import React, { Component, useState } from 'react';
import GradientButton from 'react-native-gradient-buttons';

import { 
    View,
    Text,
    ScrollView,
    TouchableOpacity,Image
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
        id: 2,
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
        id: 4,
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
            let newServices=  Services.map(x=>{
                  if(x.id==id)
                  {
                     x.Ischecked=!x.Ischecked
                  
                  }
                  return x;
              })
              
              SetServices(newServices);
      }
  
    const navigator = useNavigation();



     return(
       <View style={{backgroundColor:'white'}}>
            <View style={{ justifyContent:'center',paddingLeft:10 ,backgroundColor:'white',marginTop:'50%'}} >
          <Text style={{fontSize:35,fontWeight:'bold'}}>Supporter</Text>
          <Text style={{fontSize:18,color:'#949695'}}>Input required details to continue</Text>
          <ScrollView style={{marginBottom:100}}>
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
         <View style={{marginTop:10}}>
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
/*

import React, { Component, useState } from 'react';
import { 
    View,
    Text,
    ScrollView,
    TouchableOpacity
 } from 'react-native';
 import { TextInput , Checkbox } from 'react-native-paper';
 import { useNavigation } from "@react-navigation/native";


 export default function Candidate_Form(){

    const [FirstName , SetFirstName ] = useState('');
    const [LastName , SetLastName ] = useState('');
    const [Phone , SetPhone ] = useState('');
    const [Email , SetEmail ] = useState('');
    const [Password , SetPassword ] = useState('');

    const [Singer , SetSinger ] = useState(false);
    const [Musician , SetMusician ] = useState(false);
    const [Host , SetHost ] = useState(false);
    const [Judge , SetJudge ] = useState(false);
    const [Ustaad , SetUstaad ] = useState(false);

    const navigator = useNavigation();



     return(
        <View style={{ flex:1 }} >
            <View style={{ flex:0.6  , justifyContent:'center' , padding:'8%' , alignItems:'center'  }}>
                <Text style={{ fontSize:25 , fontWeight:'bold' , fontFamily:'serif' , color:'#004080' , marginTop:'10%' }} > Supporter Form</Text>
            </View>
            <ScrollView>
            
                <View style={{ flex:0.6 , backgroundColor:'#004080' , justifyContent:'center' , padding:'8%' , margin:'5%' , borderRadius:15 }} >
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
                            style={{width:'35%' , marginTop:'5%' , marginBottom:'15%' , height:50 , backgroundColor:'#00264d' , alignItems:'center' , justifyContent:'center'}} >
                            <Text style={{ fontSize:22 , fontFamily:'serif' , fontWeight:'bold' , color:'white' }} >Enter</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>
        </View>
     );
 }

 */