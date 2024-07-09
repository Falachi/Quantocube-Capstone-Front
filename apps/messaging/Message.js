import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Message = ({ text, time, flag }) => {
  const isSender = flag ? true : false;
  //const isSender = user.type === messageType;
  const rowType = isSender ? "row" : "row-reverse";
  const messageColor = isSender ? "#FE5823" : "#1B1B1B";
  const borderRadiusStyle = isSender ? { borderTopRightRadius: 0 } : { borderTopLeftRadius: 0 };

  return (
    <View style={[styles.container, { flexDirection: rowType }]}>
      <View style={styles.timeContainer}>
        <Text style={styles.time}>
          {time}
        </Text>
      </View>
      <View style={[styles.messageContainer, { backgroundColor: messageColor }, borderRadiusStyle]}>
        <Text style={styles.messageText}>{text}</Text>
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
    maxWidth: "70%",
    borderRadius: 10,
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 10,
  },
  messageText: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: '500',
  },
});

export default Message;
