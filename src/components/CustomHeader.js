import React from 'react';
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import BackIcon from '../assets/arrow.png';
import user from '../assets/user.png';

const CustomHeader = ({navigation}) => {
  return (
    <>
      <View style={styles.container}>
        <View>
          <Image source={BackIcon} style={styles.backIcon} />
        </View>
        <View style={styles.centerContainer}>
          <Text style={styles?.name}>Alan Clark</Text>
          <Text style={{color: '#a2a2a2'}}>Online</Text>
        </View>
        <View>
          <View style={styles.avaterView}>
            <Image source={user} style={styles.user} />
            <View style={styles.greenDot} />
          </View>
        </View>
      </View>
    </>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'ios' ? 40 : 30,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical:10,
    borderColor: '#00000030',
    borderBottomWidth: 0.2,
  },
  backIcon: {height: 18, width: 18, tintColor: '#455dfb'},
  user: {height: '100%', width: '100%'},
  centerContainer: {
    alignItems: 'center',
  },
  avaterView: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
  greenDot: {
    height: 14,
    width: 14,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#fff',
    backgroundColor: '#50bf4d',
    alignSelf: 'flex-end',
    position: 'absolute',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#000',
  },
});
