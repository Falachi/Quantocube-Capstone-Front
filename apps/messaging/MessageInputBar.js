import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import SendQuotation from './script/SendQuotation';

const IconProperties = {
  size: 25,
  color: '#FFF',
};

const MessageInputBar = ({ message, setMessage, handleSendMessage, handlePress }) => {
  return (
    <View style={styles.inputBar}>
      <TouchableOpacity style={styles.Button} onPress={handlePress}>
        <Icon2 name='plus' style={{ fontWeight: '900', color: IconProperties.color, fontSize: IconProperties.size }} />
      </TouchableOpacity>
      <View style={styles.textInputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Aa"
          placeholderTextColor="gray"
          value={message}
          onChangeText={setMessage}
          multiline={true} // Enable multiline input
          numberOfLines={1} // Adjust the number of lines to expand vertically
          maxLength={200} // Limit maximum characters if needed
        />
        <TouchableOpacity style={styles.sendButtonContainer} onPress={handleSendMessage}>
          <Icon2 name='send' color={'white'} size={20} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.Button}>
        <Icon2 name='microphone' style={{ fontWeight: '900', color: IconProperties.color, fontSize: IconProperties.size }} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  inputBar: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#1B1B1B',
  },
  textInputContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10, // Adjust margin for proper alignment
    maxWidth: '80%', // Limit the maximum width of the text input to 80% of the container
    backgroundColor: '#333233',
    borderWidth: 1,
    borderColor: '#333233',
    borderRadius: 20,
    marginRight:15,
    height: 'auto',
  },
  input: {
    flex: 1,
    height: '100%', // Set the input height to fill its container vertically
    color: 'white',
    paddingHorizontal: 10,
    paddingVertical: 8, // Adjust vertical padding for better input area

  },
  sendButtonContainer: {
    paddingHorizontal: 10,
    justifyContent: 'center', // Center the icon vertically
  },
  Button: {
    marginHorizontal: 10,

  },
});

export default MessageInputBar;
