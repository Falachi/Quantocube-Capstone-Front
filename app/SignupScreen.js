import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { signup, emptyfield } from '../slices/authSlice';

const SignupScreen = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('homeowner'); // Default role is homeowner
  const error = useSelector(state => state.auth.error);
  const dispatch = useDispatch();
  const signupError = useSelector(state => state.auth.error);

  useEffect(() => {
    if (signupError) {
      Alert.alert('Signup Error', signupError);
    }
  }, [signupError]);

  const handleSignup = () => {
    if (phoneNumber && password && email) {
      dispatch(signup({ phoneNumber, password, email, role }));
      navigation.navigate('Login');
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
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <View style={styles.roleContainer}>
        <Text style={styles.roleText}>Select Role:</Text>
        <View style={styles.roleButtons}>
          <TouchableOpacity onPress={() => setRole('homeowner')} style={[styles.roleButton, role === 'homeowner' && styles.selectedRole]}>
            <Text style={styles.roleButtonText}>Homeowner</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setRole('contractor')} style={[styles.roleButton, role === 'contractor' && styles.selectedRole]}>
            <Text style={styles.roleButtonText}>Contractor</Text>
          </TouchableOpacity>
        </View>
      </View>
      {error && <Text style={styles.errorText}>{error}</Text>}
      <TouchableOpacity style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonText}>Sign Up</Text>
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
  roleContainer: {
    marginBottom: 12,
    alignItems: 'center',
  },
  roleText: {
    color: '#fff',
    marginBottom: 8,
  },
  roleButtons: {
    flexDirection: 'row',
  },
  roleButton: {
    padding: 10,
    backgroundColor: 'gray',
    borderRadius: 5,
    marginHorizontal: 5,
  },
  selectedRole: {
    backgroundColor: '#FE5823',
  },
  roleButtonText: {
    color: '#fff',
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginBottom: 12,
  },
});

export default SignupScreen;
