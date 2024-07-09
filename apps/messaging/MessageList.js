import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

const MessageList = ({ route }) => {
  const {user} = route.params;
  const navigation = useNavigation();

  return(
    <View style={styles.container}>
      <Text>Insert Messages here.</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
  }
});

export default MessageList;