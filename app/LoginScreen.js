import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { login, emptyfield } from '../slices/authSlice';

const LoginScreen = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const error = useSelector(state => state.auth.error);
  const valid = useSelector(state => state.auth.valid);
  const dispatch = useDispatch();
  const role = useSelector(state => state.auth.role);

  useEffect(() => {
    if (error) {
      Alert.alert('Login Error', error);
    }
  }, [error]);

  const handleLogin = () => {
    if (phoneNumber && password) {
      dispatch(login({ phoneNumber, password }));
      if (role&&valid) {
        if (role === 'homeowner') {
          navigation.navigate('HomeownerHomePage');
        } else if (role === 'contractor') {
          navigation.navigate('ContractorHomePage');
        }
      }
    }
    else {
      dispatch(emptyfield());
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.phoneContainer}>
        <Text style={styles.phonePrefix}>+60-</Text>
        <TextInput
          style={styles.phoneInput}
          placeholder="Phone Number"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          keyboardType="numeric"
        />
      </View>
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      {error && <Text style={styles.errorText}>{error}</Text>}
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
  phoneContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 8,
    height: 40,
  },
  phonePrefix: {
    color: '#fff',
    marginRight: 5,
  },
  phoneInput: {
    flex: 1,
    color: '#fff',
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
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginBottom: 12,
  },
});

export default LoginScreen;
