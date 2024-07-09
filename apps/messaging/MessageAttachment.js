import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { addMessage } from '../../store/messagesSlice';

const MessageAttachment = ({ user, receiver, time, attachment, flag, attachmentType }) => {
  const navigation = useNavigation();
  const isSender = flag;
  // const isSender = user.type === messageType;
  const rowType = isSender ? 'row' : 'row-reverse';
  const messageColor = isSender ? '#FE5823' : '#1B1B1B';
  const borderRadiusStyle = isSender ? { borderTopRightRadius: 0 } : { borderTopLeftRadius: 0 };

  const toMessage = () => {
    if (attachmentType === 'request') {
      navigation.navigate('RequestDetails', { user, receiver, attachment });
    }
    else if (attachmentType === 'quotation') {
      navigation.navigate('QuotationDetails', { user, receiver, attachment });
    }
    else {
      Alert.alert('Invalid type.');
    }
  };

  return (
    <View style={[styles.container, { flexDirection: rowType }]}>
      <View style={styles.timeContainer}>
        <Text style={styles.time}>{time}</Text>
      </View>
      <View style={[styles.messageContainer, { backgroundColor: messageColor }, borderRadiusStyle]}>
        <View style={{flex:1, flexDirection: 'row', alignItems:'center'}}>
          <TouchableHighlight style={styles.iconContainer} onPress={toMessage}>
            <Icon name='file' size={17} color={'white'} />
          </TouchableHighlight>
          <Text style={styles.messageTitle}>Service Request</Text>
        </View>
        <Text style={styles.messageText}>{attachment.description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    marginBottom: 5,
  },
  timeContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
    paddingBottom: 10,
  },
  time: {
    color: 'gray',
    fontSize: 12,
  },
  messageContainer: {
    alignSelf: 'flex-end',
    maxWidth: '70%',
    borderRadius: 10,
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 10,
    flexDirection: 'column',
  },
  iconContainer: {
    padding: 10,
    backgroundColor: 'black',
    borderRadius: 50,
    alignContent: 'center',
    alignItems: 'center'
  },
  messageTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: 'white',
    paddingLeft: 10,
  },
  messageText: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: '500',
    paddingTop: 10,
  },
});

export default MessageAttachment;