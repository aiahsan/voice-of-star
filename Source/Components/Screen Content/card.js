import React,{useState} from 'react'
import {View,Text,TouchableOpacity,Image} from 'react-native';
import { Ionicons, MaterialIcons , FontAwesome5 , Entypo , FontAwesome , AntDesign ,MaterialCommunityIcons} from '@expo/vector-icons'; 
import ProgressCircle from 'react-native-progress-circle'

export default ({title,rank,vote,like,unlike,view,img,raw})=> 
    


{
    const [isLike,setIslike]=useState(true);
    const [isDislike,setIsDislike]=useState(true);

    const handleLike=()=>
    {
//setIslike(!isLike);
  //      setIsDislike(false);
        }
        
    const handledisLike=()=>
    {
    //    setIslike(false);
      //  setIsDislike(!isDislike);
        }

    return     <TouchableOpacity style={{flex:1,justifyContent:'center', borderWidth:2 , borderColor:'transparent' , elevation:3 , padding:'2%'}}>
    <View style={{flex:1,justifyContent:'space-between',alighItem:'center',flexDirection:'row'}}>
        <Text numberOfLines={1} ellipsizeMode='tail' style={{paddingTop:13 , fontSize:12 , fontFamily:'serif' , fontWeight:'bold' , color:'black'}}>{title}</Text>
    
    </View>
    <View style={{flex:1,justifyContent:'center',flexDirection:'row'}}>

<TouchableOpacity style={{flex:1,marginRight:2.5}}>
<Image source={require('../../Images/aa.png')} style={{width:'100%',height:15}} resizeMode="stretch" />
</TouchableOpacity>            
<TouchableOpacity style={{flex:1,marginRight:2.5}}>
<Image source={require('../../Images/dw.png')} style={{width:'100%',height:15}} resizeMode="stretch" />
</TouchableOpacity>           
<TouchableOpacity style={{flex:1,marginRight:2.5}}>
<Image source={require('../../Images/fl.png')} style={{width:'100%',height:15}} resizeMode="stretch" />
</TouchableOpacity>           
<TouchableOpacity style={{flex:1,marginRight:2.5}}>
<Image source={require('../../Images/sb.png')} style={{width:'100%',height:15}} resizeMode="stretch" />
</TouchableOpacity>           
    
    </View>
    <View style={{flex:1,maxWidth:200,maxHeight:110,alignItems:'center',justifyContent:'center'}}>
    <Image source={img} resizeMode="stretch" style={{width:'100%',height:'100%',alignSelf:'center',marginTop:20}}  />

    </View>
    <View style={{flex:1,flexDirection:'row',paddingTop:'10%'}}>
    <View style={{flex:.7}}>
        <View style={{flex:1,justifyContent:'flex-start',flexDirection:'row',alignItems:'center',borderBottomWidth:1,borderColor:'#d2d2d2'}}>
<Text style={{fontSize:22,fontWeight:'bold',borderRightWidth:1,paddingRight:'6%',borderColor:'#d2d2d2'}}>{rank}<Text style={{fontSize:13}}>{raw}</Text></Text>
<View style={{marginLeft:'10%',marginTop:'5%'}}>
<TouchableOpacity>
<Image source={require('../../Images/vt.png')} style={{width:'100%',height:15}} resizeMode="stretch" />

</TouchableOpacity>
<Text style={{color:'#a1a1a1'}} >Votes: {vote}</Text>

</View>
        </View>
        <View style={{flex:1,justifyContent:'flex-start',flexDirection:'row',alignItems:'center',paddingTop:5}}>
            <TouchableOpacity onPress={()=>handleLike()}><Text style={{color:'#8a8a8a'}}><AntDesign name="like1" size={13} color={(isLike==true?"#369929":"#8a8a8a")} />0</Text>
</TouchableOpacity>
<TouchableOpacity onPress={()=>handledisLike()}><Text style={{color:'#8a8a8a',marginLeft:10,marginRight:5}}><AntDesign name="dislike1" size={13} color={(isDislike==true?"#fb0102":"#8a8a8a")} />0</Text>
</TouchableOpacity>

<TouchableOpacity>
<Image source={require('../../Images/shr.png')} style={{width:30,height:10,marginLeft:5,marginRight:5}} resizeMode="stretch" />

</TouchableOpacity>
     <Image source={require('../../Images/eye.png')} style={{width:20,height:10,marginLeft:6}} resizeMode="stretch" />
     <Text style={{marginLeft:2,color:'#8a8a8a'}}></Text>
     

        </View>
 
    </View>
    <View style={{flex:.3}}>
    <ProgressCircle
    percent={30}
    radius={25}
    borderWidth={5}
    color="#3399FF"
    shadowColor="#999"
    bgColor="#fff"
    
>
    <Text style={{ fontSize: 12 }}>{'30%'}</Text>
</ProgressCircle>
    </View>
    </View>
</TouchableOpacity>


}
/*

<TouchableOpacity  onPress={() => alert('Download it!')} >
                    <FontAwesome name="cloud-download" size={24} color="green" />
                    <Text style={{fontSize:8 , fontFamily:'serif' , fontWeight:'300' , color:'black'}}>Download</Text>
                </TouchableOpacity>     

                <TouchableOpacity  onPress={() => alert('Upload it!')}>
                        <Entypo name="upload-to-cloud" size={24} color="blue" />
                        <Text style={{fontSize:8 , fontFamily:'serif' , fontWeight:'300' , color:'black'}}>Upload</Text>
                </TouchableOpacity>

                */




                /*

                 <View style={{flex:1.7}}>
            </View>
            <View style={{flex:.5,justifyContent:'space-evenly',alighItem:'center',flexDirection:'row', top:5}}>
                <Text style={{fontSize:16 , fontFamily:'serif' , fontWeight:'bold' , color:'black'}} >{rank} |</Text>
                <Text style={{ fontSize:14  ,fontFamily:'serif' , fontWeight:'bold' , color:'#b3b3b3'  }} >Votes:{vote}</Text>
            </View>
            <View style={{flex:.5,justifyContent:'space-evenly',alighItem:'center',flexDirection:'row' , top:10}}>
                <TouchableOpacity style={{flexDirection:'row'}} onPress={() => alert('like it')} >
                        <AntDesign name="like1" size={16} color="#b3b3b3"  />
                        <Text style={{fontSize:12, fontFamily:'serif' , fontWeight:'300' , color:'#b3b3b3'}} > {like} </Text>
                 </TouchableOpacity>
                
                <TouchableOpacity style={{flexDirection:'row'}} onPress={() => alert('Unlike it')} >
                        <AntDesign name="dislike1" size={16} color="#b3b3b3"  />
                        <Text style={{fontSize:12, fontFamily:'serif' , fontWeight:'300' , color:'#b3b3b3' }} > {unlike} </Text>
                </TouchableOpacity>
                    
                <MaterialIcons name="live-tv" size={20} color="#b3b3b3" style={{ marginLeft:'15%' , marginTop:'-3%' }} />
                
                <Entypo name="eye" size={20} color="#b3b3b3" style={{ marginLeft:'5%' , marginTop:'-3%' }}   />
                <Text style={{fontSize:12, fontFamily:'serif' , fontWeight:'300', color:'#b3b3b3'}} > {view} </Text>
            
            </View>
      */

      /*

      <View style={{flex:.5,justifyContent:'space-between',flexDirection:'row',borderWidth:1,borderRadius:15,paddingRight:10}}>
                    
            <View style={{backgroundColor:'#199213',justifyContent:'center',borderRadius:15,position:'relative',zIndex:100,width:'30%',height:'100%'}}>
                    <Ionicons name="md-download" size={16} color="white"  style={{alignSelf:'center'}}/>

                    </View>
                    <Text style={{fontSize:10,alignSelf:'center'}} >Download</Text>
     
                </View> 


                    <View style={{marginLeft:1,flex:.5,justifyContent:'space-between',flexDirection:'row',borderWidth:1,borderRadius:15,paddingRight:10}}>
                    
                <View style={{backgroundColor:'#396ebc',justifyContent:'center',borderRadius:15,position:'relative',zIndex:100,width:'30%',height:'100%'}}>
                    <MaterialCommunityIcons name="upload" size={16} color="white"  style={{alignSelf:'center'}}/>

                    </View>
                    <Text style={{fontSize:10,alignSelf:'center',marginRight:'10%'}} >Upload</Text>
                </View> 

                */