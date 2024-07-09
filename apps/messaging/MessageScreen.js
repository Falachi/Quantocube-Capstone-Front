import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { addMessage } from '../../store/messagesSlice';
import Message from './Message';
import MessageAttachment from './MessageAttachment';
import MessageInputBar from './MessageInputBar';
import MessageTextBar from './MessageTextBar';
import scripts from './script/SendQuotation';

const getCurrentDayAndMonth = () => {
  const date = new Date();
  const day = date.getDate();
  const month = date.toLocaleString('default', { month: 'long' });
  return { day, month };
};

const getCurrentTime = () => {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  return `${hours}:${minutes < 10 ? '0' + minutes : minutes}`;
};

const MessageScreen = ({ user, receiver, attachment }) => {

  const { day, month } = getCurrentDayAndMonth();
  //const messages = useSelector((state) => state.messages.list);
  const messages = useSelector((state) => {
    console.log('Redux State:', state); // Check state structure here
    return state.messages.list || [];
  });  
  const dispatch = useDispatch();
  const [message, setMessage] = useState('');

  // Find the form data if attachment is provided
  const form = useSelector((state) =>
    attachment ? state.requestForm.find((item) => item.id === attachment) : null
  );

  const handleSendMessage = () => {
    if (message.trim() === '') {
      return;
    }

    const newMessage = {
      type: 'text',
      text: message,
      time: getCurrentTime(),
      flag: true,
    };

    dispatch(addMessage(newMessage));
    setMessage('');
  };

  const handlePress = () => {
    for (const script of scripts) {
      dispatch(addMessage(script));
    };
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 0} // Adjust this offset if needed
    >
      <ScrollView style={styles.messageScreen}>
        <Text style={styles.dateText}>{`${day} ${month}`}</Text>
        {messages.map((msg, index) => {
          if (msg.type === 'text') {
            return <Message key={index} text={msg.text} time={msg.time} flag={msg.flag}/>;
          } else if (msg.type === 'attachment') {
            return <MessageAttachment key={index} user={user} receiver={receiver} time={msg.time} attachment={msg.attachment} flag={msg.flag} attachmentType={msg.attachmentType}/>;
          } else if (msg.type === 'bar') {
            return <MessageTextBar key={index} name={msg.name} message={msg.text} />;
          }
          return null;
        })}
      </ScrollView>
      <MessageInputBar
        message={message}
        setMessage={setMessage}
        handleSendMessage={handleSendMessage}
        handlePress={handlePress}
      />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  messageScreen: {
    flex: 1,
    backgroundColor: 'black',
  },
  dateText: {
    textAlign: 'center',
    marginVertical: 10,
  },
});

export default MessageScreen;
