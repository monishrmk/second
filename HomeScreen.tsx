import {
  View,  Text, TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';

const HomeScreen = (navigation: any) => {
  const [state, setState] = useState(0);

  return (
    <View style={{height: 760, backgroundColor: 'lightblue'}}>
      <Text style={{alignSelf: 'center'}}>HomeScreen</Text>

      <TouchableOpacity
        style={{
          backgroundColor: 'pink',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 300,
          marginBottom: 22,
        }} onPress={()=>{setState(state+2)}}>
        <Text style={{padding: 10}}>Click Me</Text>
      </TouchableOpacity>

      <Text>current value : {state} </Text>

      <TouchableOpacity onPress={()=>{navigation.goBack()}}>
        <View style={{width:100,height:100,backgroundColor:'green',marginTop:50,alignSelf:'center'}}></View>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
