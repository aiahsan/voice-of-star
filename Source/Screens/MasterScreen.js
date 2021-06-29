import React,{useState} from 'react';
import { Button, View, Text , Image,TouchableOpacity } from 'react-native';
import { createDrawerNavigator  ,  DrawerContentScrollView , DrawerItemList} from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator} from '@react-navigation/stack';
import Home_Page from './Home_Screen/HomeScreen';
import Inbox_Page from './Inbox_Screen/InboxScreen';
import Activity_Page from './Activity_Screen/Activity';
import Profile_Page from './Profile_Screen/Profile';
import Candidator_Page from './Candidate/Candidator';
import Supporter_Page from "../Screens/Supporter/Supporter";
import Candidtae_Form_Page from '../Forms/Candidate_Form';
import Supporter_Form_Page from '../Forms/Supporter_Form';
import Provinces_Page from '../Screens/country';
import City_Page from '../Components/ListOfProvinces';
import StateContext from '../context';

import Header from '../Components/header'
import { AntDesign , Feather, MaterialCommunityIcons ,Ionicons, MaterialIcons , EvilIcons , Entypo,Foundation,FontAwesome5} from '@expo/vector-icons'; 

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();




function StackScreen() {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}
    
    >
      <Stack.Screen name="Home_Page" component={HomeScreen} />
      <Stack.Screen name="Candidate_Form_Page" component={Candidtae_Form_Page} />
      <Stack.Screen name="Candidator" component={Candidator_Page} />
      <Stack.Screen name="Supporter_Form_Page" component={Supporter_Form_Page} />
      <Stack.Screen name="Supporter" component={Candidator_Page} />

      <Stack.Screen name="Provinces_Page"   component={Provinces_Page} />
      <Stack.Screen name="City_Page"   component={City_Page} />


    </Stack.Navigator>
  );
}
function HomeScreen() {
  return (
    <Tab.Navigator tabBarOptions={{
      activeTintColor:'#999999',
      labelStyle:{fontSize:14 , fontFamily:'serif', fontWeight:'400' , color:'#262626'}
    }}>
        <Tab.Screen  options={() => ( {
          tabBarIcon:() => {
            return(
              <MaterialCommunityIcons
              name='home'
              color='#999999'
              size={24}
            />
            );
          }
        })} name="Home" component={Home_Page} />
        <Tab.Screen  options={() => ( {
          tabBarIcon:() => {
            return(
              <Entypo 
              name="inbox" 
              size={24} 
              color="#999999" />
            );
          }
        })} name="Inbox" component={Inbox_Page} />
        <Tab.Screen  options={() => ( {
          tabBarIcon:() => {
            return(
              <Feather name="activity" size={24} color="#999999" />

            );
          }
        })} name="Activity" component={Activity_Page} />
        <Tab.Screen options={() => ( {
          tabBarIcon:() => {
            return(
              <MaterialCommunityIcons name="face-recognition" size={24} color="#999999" />

            );
          }
        })} name="Me" component={Profile_Page} />
    </Tab.Navigator>
  );
  }

/*function Candidate(){
  <Stack.Navigator>
    <Stack.Screen name='Candidator' component={Candidator_Page}  />
  </Stack.Navigator>
}
*/
const Drawer = createDrawerNavigator();
export default function App() {
  [currentState,setcurrentState]=useState("Pakistan");

  return (
    <StateContext.Provider value={{currentState,setcurrentState}}>
      <NavigationContainer>
      <Drawer.Navigator  drawerContent={props => <CustomDrawerContent {...props} />}
                        initialRouteName="Home" 
                        drawerContentOptions={{
                          activeTintColor:'#999999',
                          itemStyle:{marginVertical:2},
                          labelStyle:{fontSize:18 , fontFamily:'serif' , fontWeight:'400'  , color:'#1a1a1a'} }} 
                >
        <Drawer.Screen options={()=>({
                          drawerIcon:() => {
                            return(
                              <MaterialCommunityIcons
                              name='home'
                              color='#8c8c8c'
                              size={24}
                            />
                            );
                          },
                        })}  name="Home" component={StackScreen} />
        <Drawer.Screen options={()=>({
                          drawerIcon:() => {
                            return(
                              <Entypo 
                                  name="inbox" 
                                  size={24} 
                                  color="#8c8c8c" />
                            );
                          },
                        })}  name="Inbox" component={Inbox_Page} />
        <Drawer.Screen options={()=>({
                          drawerIcon:() => {
                            return(
                              <Feather name="activity" size={24} color="#8c8c8c" />
                            );
                          },
                        })} name="Activity" component={Activity_Page} />
       


      </Drawer.Navigator>
    </NavigationContainer>
    </StateContext.Provider>
  )
}

function CustomDrawerContent(props){
  const Name = 'Ahmed';
  const Email = 'ahmed123@mail.com'
  return(
    <>
   
      <View style={{   flex:0.5  , flexDirection:'column',backgroundColor:'#ea4b4d',paddingLeft:'5%' }}>
      <Image source={require('../Images/a.png')} style={{ width:50 , height:50  , borderRadius:50 , marginTop:'30%'}} />
         <Text style={{color:'white',fontSize:16,fontWeight:'bold'}}>Voice of Superstar</Text>
         <Text style={{color:'white',fontSize:16,fontWeight:'bold'}}>Current Starts Status</Text>

        
      </View>
     
    
    
    

    <DrawerContentScrollView style={{}} >
     <Text style={{fontWeight:'bold',fontSize:16,marginBottom:30,paddingLeft:'5%',paddingRight:'3%'}}>Live</Text>
     <TouchableOpacity style={{paddingLeft:'5%',paddingRight:'3%'}}>
     <View style={{height:50,flexDirection:'row',flex:1,justifyContent:'center'}}>
      <View style={{flex:.2}}>
      <Feather name="grid" size={24} color="black" />
      </View>
      <View style={{flex:1}}>
    <Text style={{textAlign:'left',marginTop:5,marginLeft:10,fontWeight:'bold'}}>Dashboard</Text>
      </View>
     </View>
     </TouchableOpacity>

     <TouchableOpacity style={{paddingLeft:'5%',paddingRight:'3%'}}>
     <View style={{height:50,flexDirection:'row',flex:1,justifyContent:'center'}}>
      <View style={{flex:.2}}>
      <Feather name="list" size={24} color="black" />
      </View>
      <View style={{flex:1}}>
    <Text style={{textAlign:'left',marginTop:5,marginLeft:10,fontWeight:'bold'}}>List</Text>
      </View>
     </View>
     </TouchableOpacity >

     <TouchableOpacity style={{paddingLeft:'5%',paddingRight:'3%'}}>
     <View style={{height:50,flexDirection:'row',flex:1,justifyContent:'center'}}>
      <View style={{flex:.2}}>
      <Foundation name="graph-bar" size={24} color="black" />
      </View>
      <View style={{flex:1}}>
    <Text style={{textAlign:'left',marginTop:5,marginLeft:10,fontWeight:'bold'}}>Graphs</Text>
      </View>
     </View>
     </TouchableOpacity>
     <TouchableOpacity style={{paddingLeft:'5%',paddingRight:'3%'}}>
     <View style={{height:50,flexDirection:'row',flex:1,justifyContent:'center'}}>
      <View style={{flex:.2}}>
      <FontAwesome5 name="map-marked-alt"  size={24} color="black" />
      </View>
      <View style={{flex:1}}>
    <Text style={{textAlign:'left',marginTop:5,marginLeft:10,fontWeight:'bold'}}>Google Map</Text>
      </View>
     </View>
     </TouchableOpacity>
     <TouchableOpacity style={{paddingLeft:'5%',paddingRight:'3%'}}>
     <View style={{height:50,flexDirection:'row',flex:1,justifyContent:'center'}}>
      <View style={{flex:.2}}>
      <Feather name="check-square" size={24} color="black" />
      </View>
      <View style={{flex:1}}>
    <Text style={{textAlign:'left',marginTop:5,marginLeft:10,fontWeight:'bold'}}>Toady's Votes</Text>
      </View>
     </View>
     </TouchableOpacity>
     <TouchableOpacity style={{borderWidth:1,paddingLeft:'5%',paddingRight:'3%',paddingTop:'5%',borderLeftColor:'white',borderRightColor:'white',borderColor:'#cecece'}}>
     <View style={{height:50,flexDirection:'row',flex:1,justifyContent:'center'}}>
      <View style={{flex:.2}}>
      <MaterialIcons name="fingerprint" size={24} color="black" />
      </View>
      <View style={{flex:1}}>
    <Text style={{textAlign:'left',marginTop:5,marginLeft:10,fontWeight:'bold'}}>Cast Your Vote</Text>
      </View>
     </View>
     </TouchableOpacity>
     <TouchableOpacity style={{paddingLeft:'5%',paddingRight:'3%',marginTop:'6%'}}>
     <View style={{height:50,flexDirection:'row',flex:1,justifyContent:'center'}}>
      <View style={{flex:.2}}>
      <MaterialIcons name="share" size={24} color="black" />
      </View>
      <View style={{flex:1}}>
    <Text style={{textAlign:'left',marginTop:5,marginLeft:10,fontWeight:'bold'}}>Share</Text>
      </View>
     </View>
     </TouchableOpacity>
     <TouchableOpacity style={{paddingLeft:'5%',paddingRight:'3%'}}>
     <View style={{height:50,flexDirection:'row',flex:1,justifyContent:'center'}}>
      <View style={{flex:.2}}>
      <Ionicons name="md-star" size={24} color="black" />
      </View>
      <View style={{flex:1}}>
    <Text style={{textAlign:'left',marginTop:5,marginLeft:10,fontWeight:'bold'}}>Rate Us</Text>
      </View>
     </View>
     </TouchableOpacity>
     <TouchableOpacity style={{paddingLeft:'5%',paddingRight:'3%'}}>
     <View style={{height:50,flexDirection:'row',flex:1,justifyContent:'center'}}>
      <View style={{flex:.2}}>
      <Entypo name="v-card" size={24} color="black" />
      </View>
      <View style={{flex:1}}>
    <Text style={{textAlign:'left',marginTop:5,marginLeft:10,fontWeight:'bold'}}>Contact Us</Text>
      </View>
     </View>
     </TouchableOpacity>
     <TouchableOpacity style={{paddingLeft:'5%',paddingRight:'3%'}}>
     <View style={{height:50,flexDirection:'row',flex:1,justifyContent:'center'}}>
      <View style={{flex:.2}}>
      <MaterialIcons name="live-help" size={24} color="black" />
      </View>
      <View style={{flex:1}}>
    <Text style={{textAlign:'left',marginTop:5,marginLeft:10,fontWeight:'bold'}}>Help</Text>
      </View>
     </View>
     </TouchableOpacity>
     <TouchableOpacity style={{paddingLeft:'5%',paddingRight:'3%'}}>
     <View style={{height:50,flexDirection:'row',flex:1,justifyContent:'center'}}>
      <View style={{flex:.2}}>
      <Foundation name="page-copy" size={24} color="black" />
      </View>
      <View style={{flex:1}}>
    <Text style={{textAlign:'left',marginTop:5,marginLeft:10,fontWeight:'bold'}}>Privacy Policy</Text>
      </View>
     </View>
     </TouchableOpacity>
     <TouchableOpacity style={{paddingLeft:'5%',paddingRight:'3%'}}>
     <View style={{height:50,flexDirection:'row',flex:1,justifyContent:'center'}}>
      <View style={{flex:.2}}>
      <Entypo name="newsletter" size={24} color="black" />
      </View>
      <View style={{flex:1}}>
    <Text style={{textAlign:'left',marginTop:5,marginLeft:10,fontWeight:'bold'}}>Terms And Conditions</Text>
      </View>
     </View>
     </TouchableOpacity>
    </DrawerContentScrollView>

    </>
    
    
  );
}