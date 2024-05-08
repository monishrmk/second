// import { View, Text, Touchable, TouchableOpacity } from 'react-native'
// import React, { useState } from 'react'


// const Real = ({navigation}: any) => {
// const [count, setCount] = useState(0);
// const [delete, setDelete] = useState(0);

//   return (
//     <View>
//         <TouchableOpacity onPress={()=>{navigation.goBack()}}>
//             <View style={{width:50,height:50,backgroundColor:'black'}}></View>
//         </TouchableOpacity>
//       <Text>You Clicked{count}times</Text>

//       <TouchableOpacity onPress={()=>{setCount(count+2)}}>
//       <Text style={{textAlign:'center',marginTop:300,backgroundColor:'red',color:'white',height:100}}>click me</Text>
//       </TouchableOpacity>

//       <TouchableOpacity onPress={()=>{setDelete(delete*0)}}>
//       <Text style={{textAlign:'center',marginTop:50,backgroundColor:'green',color:'white',height:100}}>RESET me</Text>
//       </TouchableOpacity>
//     </View>
//   )
// }

// export default Real



// import React, { useState } from 'react';
// import { View, Text, Button } from 'react-native';

// const CounterWithDelete = () => {
//   const [count, setCount] = useState(0);

//   const incrementCount = () => {
//     setCount(count + 1);
//   };

//   const decrementCount = () => {
//     setCount(count - 1);
//   };

//   const resetCount = () => {
//     setCount(0);
//   };

//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Count: {count}</Text>
//       <Button title="Increment" onPress={incrementCount} />
//       <Button title="Decrement" onPress={decrementCount} />
//       <Button title="Reset" onPress={resetCount} />
//       <Button title="Delete Counter" onPress={() => setCount(null)} />
//     </View>
//   );
// };

// export default CounterWithDelete;


import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';

const ListExample = () => {
  const [items, setItems] = useState([]);
  const [text, setText] = useState('');

  const addItem = () => {
    if (text.trim() !== '') {
      setItems([...items, text]);
      setText('');
    }
  };

  const removeItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingHorizontal: 10 }}
        onChangeText={setText}
        value={text}
        placeholder="Enter item"
      />
      <Button title="Add Item" onPress={addItem} />
      <FlatList
        style={{ marginTop: 20 }}
        data={items}
        renderItem={({ item, index }) => (
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
            <Text>{item}</Text>
            <Button title="Remove" onPress={() => removeItem(index)} />
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default ListExample;

