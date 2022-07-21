import React, {useRef, useState} from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  TextInput,
} from 'react-native';
import emoji from '../assets/emoji.png';
import emoji2 from '../assets/emoji2.png';
import enterArrow from '../assets/enterArrow.png';

const CustomInput = ({navigation}) => {
  const scrollViewRef = useRef();
  const [message, setMessage] = useState('');
  return (
    <>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <View style={styles.inputContainer}>
          {message ? (
            <Image source={emoji2} style={styles.Icon} />
          ) : (
            <Image source={emoji} style={styles.Icon} />
          )}
          <TextInput
            ref={scrollViewRef}
            // onPressIn={() => {
            //   setTimeout(() => {
            //     scrollViewRef.current.scrollToEnd({animated: true});
            //   }, 400);
            // }}
            style={styles.input}
            placeholder="Type message"
            placeholderTextColor="grey"
            onChangeText={text => setMessage(text)}
            //   value={message}
          />
          <TouchableOpacity            
            disabled={message.length === 0}
            style={[
              styles.sendButton,
              {backgroundColor: message ? '#455dfb' : '#a2a2a2'},
            ]}
            activeOpacity={0.9}>
            <Image source={enterArrow} style={styles.sendIcon} />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  container: {
    height: 80,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    width: '100%',
    alignSelf: 'center',
    backgroundColor: '#fff',
    borderColor: '#00000050',
    borderTopWidth: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '70%',
    paddingLeft: 15,
    paddingVertical: Platform.OS === 'ios' ? 30 : 20,
    color: '#000',
    fontSize: 16,
    fontWeight: '400',
  },

  sendButton: {
    height: 50,
    width: 50,
    borderRadius: 25,
    marginLeft: 15,
    // backgroundColor:  '#455dfb' ,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Icon: {height: 24, width: 24},
  sendIcon: {height: 25, width: 25, tintColor: '#fff'},
});
