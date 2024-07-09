import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../slices/authSlice';

const LoginScreen = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const role = useSelector(state => state.auth.role);

  const handleLogin = () => {
    if (phoneNumber && password) {
      dispatch(login({ phoneNumber }));
      // Navigate to the appropriate home screen based on the role
      if (role === 'homeowner') {
        navigation.navigate('HomeownerHomePage');
      } else if (role === 'contractor') {
        navigation.navigate('ContractorHomePage');
      } else {
        alert('Role not found');
      }
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Enter</Text>
      </TouchableOpacity>
      <Text style={styles.linkText} onPress={() => navigation.navigate('ForgotPassword')}>
        Forgot Password?
      </Text>
      <Text style={styles.linkText} onPress={() => navigation.navigate('Signup')}>
        Don't have an account? Sign Up
      </Text>
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
  linkText: {
    color: '#FE5823',
    marginTop: 16,
    textAlign: 'center',
  },
});

export default LoginScreen;
