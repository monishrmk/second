import { View, Text, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import { hp, wp } from './Dimensions'

const Header = ({navigation}: any) => {
  return (
    <View>
    <View style={{height:hp(9),backgroundColor:'blue',flexDirection:'row',justifyContent:'space-evenly',alignItems:'center'}}>
      <View style={{backgroundColor:'white',height:hp(3),width:wp(6)}}></View>
      <Text style={{color:'white',fontSize:22}}> FlatList</Text>
    </View>
    <Text style={{fontSize:22}}> FlatList</Text>
    <Text style={{fontSize:22}}> FlatList and badList</Text>

    <Text style={{fontSize:22}} > FlatList and badList</Text>
    <TouchableOpacity style={{height:200,width:100,backgroundColor:'gold',alignSelf:'center',marginTop:100}}onPress={()=>{navigation.navigate('Real')}}></TouchableOpacity>


    </View>
  )
}

export default Header