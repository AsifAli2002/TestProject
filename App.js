import React from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import ChatScreen from './src/screens/chatScreen';

 const App = ({navigation}) => {
  return (
    <>

      <View style={{flex: 1}}>
      <ChatScreen/>      
      </View>
    </>
  )
}

export default App;
