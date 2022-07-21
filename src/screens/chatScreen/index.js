import React, {useRef} from 'react';
import {View, Text, StatusBar, StyleSheet, FlatList} from 'react-native';
import CustomHeader from '../../components/CustomHeader';
import CustomInput from '../../components/CustomInput';

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
  const scrollViewRef = useRef();
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
          data={ChatData}
          contentContainerStyle={{flexGrow: 1, paddingBottom: 15}}
          keykeyboardShouldPersistTaps={true}
          showsVerticalScrollIndicator={false}
          ref={scrollViewRef}
          onContentSizeChange={() =>
            scrollViewRef?.current?.scrollToEnd({animated: true})
          }
          renderItem={({item, index}) => {
            return (
              <>
                <View style={styles.receiver}>
                  <Text style={[styles.name, {color: '#3e3e3e'}]}>Hi Alan</Text>
                </View>
                <View style={styles.sender}>
                  <Text style={[styles.name, {color: '#fff'}]}>
                    Photography
                  </Text>
                </View>
              </>
            );
          }}
          keyExtractor={item => item.id}
          // extraData={selectedId}
        />
      </View>
      <CustomInput />
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
