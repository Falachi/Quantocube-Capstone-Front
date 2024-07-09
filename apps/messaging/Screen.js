import React from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import MessageScreen from './MessageScreen';
import TopBar from './TopBar';
import { useNavigation } from '@react-navigation/native';

const Screen = ({ route }) => {
  const navigation = useNavigation();
  
  // if (route.length === 2) {
  //   const { user, receiver } = route.params;
  //     console.log(receiver);
  // return (
  //   <View style={styles.container}>
  //     <TopBar recipientName={receiver.name} profilePic={receiver.profilePicture} />
  //     <MessageScreen user={user} receiver={receiver} />
  //   </View>
  //   );
  // }
  // else if (route.length === 3) {
  //   const { user, receiver, formId} = route.params;
  //   return (
  //     <View style={styles.container}>
  //       <TopBar recipientName={receiver.name} profilePic={receiver.profilePicture} />
  //       <MessageScreen user={user} receiver={receiver} attachment={formId} />
  //     </View>
  //     );
  // }
  // else {
  //   Alert.alert('Error. No info detected.');
  //   navigation.goBack();
  // };

  const { user, receiver, attachment} = route.params;
  return (
    <View style={styles.container}>
      <TopBar recipientName={receiver.name} profilePic={receiver.profilePicture} />
      <MessageScreen user={user} receiver={receiver} attachment={attachment} />
    </View>
    );

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Screen;
