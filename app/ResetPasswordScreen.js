import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { emptyfield, resetpassword } from '../slices/authSlice';
import { useDispatch, useSelector } from 'react-redux';

const ResetPasswordScreen = ({ navigation }) => {
  const [newPassword, setnewPassword] = useState('');
  const [confirmPassword, setconfirmPassword] = useState('');
  const error = useSelector(state => state.auth.error);
  const resetvalid = useSelector(state => state.auth.resetvalid);
  const dispatch = useDispatch();

  const handleResetPassword = () => {
    if (newPassword && confirmPassword) {
      dispatch(resetpassword({ newPassword, confirmPassword }));
      if (resetvalid) {
        navigation.navigate('Login');

      }
    }
    else {
      dispatch(emptyfield());
    }}


    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="New Password"
          value={newPassword}
          onChangeText={setnewPassword}
          secureTextEntry
        />
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          value={confirmPassword}
          onChangeText={setconfirmPassword}
          secureTextEntry
        />
        {error && <Text style={styles.errorText}>{error}</Text>}
        <TouchableOpacity style={styles.button} onPress={handleResetPassword}>
          <Text style={styles.buttonText}>Confirm Password</Text>
        </TouchableOpacity>
      </View>
    );
};

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      padding: 16,
      backgroundColor: '#000',
    },
    input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 12,
      paddingLeft: 8,
      color: '#fff',
    },
    button: {
      backgroundColor: '#FE5823',
      padding: 10,
      alignItems: 'center',
    },
    buttonText: {
      color: '#fff',
      fontSize: 18,
    },
    errorText: {
      color: 'red',
      textAlign: 'center',
      marginBottom: 12,
    },
  });

  export default ResetPasswordScreen;
