import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';

const ForgotPasswordScreen = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState(null);

  const handleSendOTP = () => {
    if (phoneNumber) {
      if (/^\d{9,10}$/.test(phoneNumber)) {
        // Implement OTP sending logic here
        navigation.navigate('Verification', { phoneNumber: `+60-${phoneNumber}` });
        setError(null); // Clear error if phone number is valid
      } else {
        setError('Phone number must be 9 or 10 numerical characters.');
      }
    } else {
      setError('Please enter your phone number');
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
      {error && <Text style={styles.errorText}>{error}</Text>}
      <TouchableOpacity style={styles.button} onPress={handleSendOTP}>
        <Text style={styles.buttonText}>Send OTP</Text>
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

export default ForgotPasswordScreen;
