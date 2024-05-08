import { View, Text, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'

const Mainscreen = ({navigation}: any) => {
  return (
    <View>
      <Text>Mainscreen</Text>
      <TouchableOpacity onPress={()=>{navigation.goBack()}} style={{backgroundColor:'pink'}}>
        <Text style={{padding:10}}>back</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Mainscreen