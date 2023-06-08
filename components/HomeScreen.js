import * as React from 'react';
import { Text, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'; 

//export default to open on another file
//put .js for javascript
export default function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}