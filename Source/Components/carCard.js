import React, { Component } from 'react';  
import {View,StyleSheet} from 'react-native' 
import Cardx from './Screen Content/card';

export default ({items})=>
{
    return <>
        <View style={styles.FirstBox}>
            <View style={styles.FirstCard}>
                <Cardx title="Rahat-012" rank="1st" vote="345" like="300" unlike="40" view="1000" img={require('../Images/Rahat.jpg')} />
            </View>
            <View style={styles.SecondCard}>
                <Cardx title="Abida-012" rank="2nd" vote="3.1M" like="12k" unlike="4k" view="23k" img={require('../Images/AbidaParveen.jpg')} />
            </View>
        </View>

                   <View style={styles.SecondBox}>
                    <View style={styles.FirstCard}>
                    <Cardx title="Annie-012" rank="3rd" vote="345" like="300" unlike="40" view="1k" img={require('../Images/Annie.jpg')} />
                        </View>
                        <View style={styles.SecondCard}>
                        <Cardx title="GulParna-012" rank="4th" vote="345" like="300" unlike="40" view="10k" img={require('../Images/GulParna.jpg')} />
                        </View>
                   </View>
                   <View style={styles.ThirdBox}>
                    <View style={styles.FirstCard}>
                    <Cardx title="Atif Aslam-012" rank="5th" vote="345" like="300" unlike="40" view="10k" img={require('../Images/AtifAslam.jpg')} />
                        </View>
                        <View style={styles.SecondCard}>
                        <Cardx title="Ali-012" rank="6th" vote="345" like="300" unlike="40" view="1M" img={require('../Images/Alizafar.jpg')} />
                        </View>
                   </View>
    </>
}

const styles = StyleSheet.create({
    container:{
        top:24,
        flex:1,
        backgroundColor:'white'
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
        backgroundColor:'red'
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