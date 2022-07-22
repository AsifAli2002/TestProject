import React, {useEffect, useRef, useState} from 'react';
import {View, Text, StatusBar, StyleSheet, FlatList} from 'react-native';
import CustomHeader from '../../components/CustomHeader';
import CustomInput from '../../components/CustomInput';
import {io, Socket} from 'socket.io-client';
var socket;

const ChatData = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
];

const ChatScreen = ({navigation}) => {
  const [messages, setMessages] = useState([]);
  const scrollViewRef = useRef();

  useEffect(() => {
    socket = io('https://lis-chat-test.herokuapp.com');
    // console.log('connected: ', socket?.connected);
    // console.log('myId: ', socket?.id);

    socket?.on('2', incoming => {
    //   console.log({incoming});
      setMessages(pre => [...pre, incoming]);
    });
  }, []);

  const onSend = message => {
    socket?.emit('2', {data: {message, id: socket?.id}});
  };


  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={'transparent'}
        translucent={true}
      />

      <View style={styles.container}>
        <CustomHeader />

        <FlatList
          data={messages || []}
          contentContainerStyle={{flexGrow: 1, paddingBottom: 10}}
          keykeyboardShouldPersistTaps={true}
          showsVerticalScrollIndicator={false}
          ref={scrollViewRef}
          onContentSizeChange={() =>
            scrollViewRef?.current?.scrollToEnd({animated: true})
          }
          renderItem={({item, index}) => {
            const {data} = item;
            return (
              <>
                {data?.id == socket?.id ? (
                  <View style={styles.sender}>
                    <Text style={[styles.name, {color: '#fff'}]}>
                      {data?.message}
                    </Text>
                  </View>
                ) : (
                  <View style={styles.receiver}>
                    <Text style={[styles.name, {color: '#3e3e3e'}]}>
                      {data?.message}
                    </Text>
                  </View>
                )}
              </>
            );
          }}
          keyExtractor={item => item.id}
        />
      </View>
      <CustomInput onSend={onSend} />
    </>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  receiver: {
    borderRadius: 25,
    paddingHorizontal: 18,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
    marginRight: 40,
    marginVertical: 8,
    backgroundColor: '#f2f2f6',
    alignSelf: 'flex-start',
  },
  sender: {
    borderRadius: 25,
    paddingHorizontal: 18,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
    marginLeft: 40,
    marginVertical: 8,
    backgroundColor: '#455dfb',
    alignSelf: 'flex-end',
  },
  name: {
    fontWeight: '600',
    fontSize: 16,
  },
});
