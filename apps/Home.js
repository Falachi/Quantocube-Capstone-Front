import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Image, Button } from "react-native";
import users from "../utils/UserData";// Import the user data

const { width } = Dimensions.get('window');

const Home = () => {
  const navigation = useNavigation();

  const handlePress = (user) => {
    if (user.type === "homeowner") {
      navigation.navigate('InitContractor', { user });
    }
    else if (user.type === "contractor") {
      navigation.navigate('MessageList', { user });
    }
    else {
      console.log("Error. User unidentified.")
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Are you talking as a</Text>
      </View>
      <View style={styles.buttonContainer}>
        {users.map((user, index) => (
          <TouchableOpacity
            key={index}
            style={styles.box}
            onPress={() => handlePress(user)}
          >
            <Image source={user.profilePicture} style={styles.profilePic} />
            <Text style={styles.text}>{user.name} ({user.type})</Text>
          </TouchableOpacity>
        ))}
        <Button title="Form" onPress={() => navigation.navigate('RequestForm')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#070707',
    alignItems: 'center',
  },
  headerContainer: {
    justifyContent: 'center',
    marginTop: '20%',
    padding: 10,
  },
  header: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 50,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    flex: 1,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
  },
  box: {
    width: width * 0.4,
    height: width * 0.4,
    backgroundColor: '#1B1B1B',
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginBottom: 10,
  },
  text: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Home;