import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import { hp, wp } from './src/Dimensions';

const DetailsScreen = ({navigation}: any) => {
  return (
    <View>
      <View
        style={{
          height: 80,
          backgroundColor: 'blue',
          justifyContent: 'flex-start',
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: 25,
            backgroundColor: 'red',
            width: '8%',
          }}>         
          v
        </Text>
        <Text
          style={{
            color: 'white',
            marginLeft: '27%',
            fontSize: 20,
            fontWeight: 'bold',
          }}>
          MAIN SCREEN
        </Text>
      </View>

      <View style={{backgroundColor: 'red', width: '100%', height: 680}}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 18,
            textAlign: 'center',
            marginTop: '2%',
            color: 'black',
          }}>
          Screen Navigation
        </Text>
        <TouchableOpacity onPress={() =>{navigation.navigate("Mainscreen")}}>
        <View
          style={{
            height: 75,
            width: 75,
            backgroundColor: 'white',
            borderRadius: 8,
            marginTop: 80,
            marginLeft: 20,
            justifyContent:"center",
            alignItems:'center'
          }}><Text style={{color:"red",fontWeight:'bold',fontSize:17}}>Iron Man</Text></View></TouchableOpacity>

           <View
          style={{
            height: 75,
            width: 75,
            backgroundColor: 'white',
            borderRadius: 8,
            marginTop: -75,
            marginLeft: 160,
            justifyContent:"center",
            alignItems:'center'
          }}><Text style={{color:"red",fontWeight:'bold',fontSize:17}}>Hulk</Text></View>
            <View
          style={{
            height: 75,
            width: 75,
            backgroundColor: 'white',
            borderRadius: 8,
            marginTop: -75,
            marginLeft: 290,
            justifyContent:"center",
            alignItems:'center'
          }}><Text style={{color:"red",fontWeight:'bold',fontSize:17}}>spider man</Text></View>
          
          <View
          style={{
            height: 75,
            width: 75,
            backgroundColor: 'white',
            borderRadius: 8,
            marginTop: 80,
            marginLeft: 20,
            justifyContent:"center",
            alignItems:'center'
          }}><Text style={{color:"red",fontWeight:'bold',fontSize:17}}>Super Man</Text></View>
           <View
          style={{
            height: 75,
            width: 75,
            backgroundColor: 'white',
            borderRadius: 8,
            marginTop: -75,
            marginLeft: 160,
            justifyContent:"center",
            alignItems:'center'
          }}><Text style={{color:"red",fontWeight:'bold',fontSize:17}}>BEN 10</Text></View>
            <View
          style={{
            height: 75,
            width: 75,
            backgroundColor: 'white',
            borderRadius: 8,
            marginTop: -75,
            marginLeft: 290,
            justifyContent:"center",
            alignItems:'center'
          }}><Text style={{color:"red",fontWeight:'bold',fontSize:17}}>BAT  MAN</Text></View>
          
          <View
          style={{
            height: 75,
            width: 75,
            backgroundColor: 'white',
            borderRadius: 8,
            marginTop: 80,
            marginLeft: 20,
            justifyContent:"center",
            alignItems:'center'
          }}><Text style={{color:"red",fontWeight:'bold',fontSize:17}}>Fast Furious</Text></View>
           <View
          style={{
            height: 75,
            width: 75,
            backgroundColor: 'white',
            borderRadius: 8,
            marginTop: -75,
            marginLeft: 160,
            justifyContent:"center",
            alignItems:'center'
          }}><Text style={{color:"red",fontWeight:'bold',fontSize:17}}>Mission Imposible</Text></View>
            <View
          style={{
            height: 75,
            width: wp(75),
            backgroundColor: 'white',
            borderRadius: 8,
            marginTop: -75,
            marginLeft: hp(290),
            justifyContent:"center",
            alignItems:'center'
          }}>
            <TouchableOpacity onPress={()=>{navigation.navigate('HomeScreen')}}>
            <Text style={{color:"red",fontWeight:'bold',fontSize:17}}>Resident Evil</Text>
            </TouchableOpacity>
            </View>
          
      </View>
    </View>
  );
};

export default DetailsScreen;
