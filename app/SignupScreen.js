import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { signup } from '../slices/authSlice';
import { configureStore, createSlice } from '@reduxjs/toolkit';

const SignupScreen = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('homeowner'); // Default role is homeowner
  const dispatch = useDispatch();

  const handleSignup = () => {
    if (phoneNumber && password && email && role) {
      dispatch(signup({ phoneNumber, role }));
      // Navigate to the home screen or other screen after signup
    } else {
      alert('Please fill in all fields');
    }
  };

  const initialState={
    accounttype:'homeowner',
  }
  const AccType = createSlice({
    name: 'accounttype',
    initialState,
    reducers: {
      homeowner: (state) => {
        state.accounttype = 'homeowner';
      },
      contractor: (state) => {
        state.accounttype = 'contractor';
      },
    },
  })

  const store = configureStore({
    reducer: AccType.reducer,

  })


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
});


export default SignupScreen;
