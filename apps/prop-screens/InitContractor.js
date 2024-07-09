import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import users from '../../utils/UserData';

const InitContractor = ({ route }) => {
  const { user } = route.params;
  const navigation = useNavigation();

  // Function to handle navigation to messaging screen
  const handleStartChat = (index) => () => {
    const receiver = users[index];
    console.log(index);
    navigation.navigate('RequestForm', {
      user,
      receiver,
    });
  };

  const handleToChat = (index) => () => {
    const receiver = users[index];
    console.log(receiver);
    navigation.navigate("Screen", {
      user, receiver
    });
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 18, marginBottom: 20 }}>
        Initiate a chat with:
      </Text>
      {users.map((user, index) => (
        user.type === "contractor" && (
          <View key={index} style={styles.buttonContainer}>
            <Button title={user.name} onPress={handleStartChat(index)} />
          </View>
        )
      ))}
      <View style={styles.buttonContainer}>
        <Button title="Show Message List" onPress={handleToChat(1)} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Home" onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    padding: 20, 
    backgroundColor: 'black'
  },
  buttonContainer: {
    width: '100%',
    marginVertical: 10,
  },
});

export default InitContractor;
