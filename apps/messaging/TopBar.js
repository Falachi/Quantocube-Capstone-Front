import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/FontAwesome';

const ButtonProperties = {
  size: 25,
  color: '#FE5823',
};

const TopBar = ({ recipientName, profilePic }) => {
  
  const navigation = useNavigation();

  const handleBackButton = () => {
    navigation.goBack()
  };
  
  return (
    <View style={styles.topBar}>
      <TouchableOpacity style={styles.button} onPress={handleBackButton}>
        <Icon2 name='arrow-left' size={ButtonProperties.size} color={ButtonProperties.color}></Icon2>
      </TouchableOpacity>
      <Image
        style={styles.avatar}
        source={profilePic}
      />
      <Text style={styles.userName}>{recipientName}</Text>
      <TouchableOpacity style={styles.button}>
        <Icon2 name="video-camera" size={ButtonProperties.size} color={ButtonProperties.color}></Icon2>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Icon name="call" size={ButtonProperties.size} color={ButtonProperties.color}></Icon>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1B1B1B',
    padding: 20,
    paddingTop: 60,
  },
  backButton: {
    color: 'orange',
    fontSize: 20,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 30,
    marginHorizontal: 10,
  },
  userName: {
    flex: 1,
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    
  },
  button: {
    paddingHorizontal: 10,
  }
});

export default TopBar;
