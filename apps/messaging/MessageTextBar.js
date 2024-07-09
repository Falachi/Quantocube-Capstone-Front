import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { addMessage } from '../../store/messagesSlice';

const MessageTextBar = ({ name, message }) => {

  return (
    <View style={[styles.container, { flexDirection: 'row' }]}>
      <Text style={styles.text}>{`${name.toUpperCase()} ${message.toUpperCase()}`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    paddingHorizontal: 20,
    flex: 1,
  },
  text: {
    color: '#8F9193',
    fontSize: 12,
    fontWeight: '600',
  },
});

export default MessageTextBar;