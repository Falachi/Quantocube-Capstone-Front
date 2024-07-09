import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet, StatusBar } from 'react-native';

export default function LoginScreen() {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={styles.container}>
            <View style={styles.subcontainer}>
                <StatusBar barStyle="light-content" />
                <Pressable style={styles.backButton}>
                    <Text style={styles.backButtonText}>{'<'}</Text>
                </Pressable>
                <Text style={styles.title}>Log In</Text>
                <Pressable style={styles.switchSiteButton}>
                    <Text style={styles.switchSiteText}>Switch to Contractor Site</Text>
                </Pressable>
                <TextInput
                    style={styles.input}
                    placeholder="Phone Number"
                    placeholderTextColor="#999"
                    keyboardType="phone-pad"
                    value={phoneNumber}
                    onChangeText={setPhoneNumber}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    placeholderTextColor="#999"
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                />
                <Pressable
                    style={({ pressed }) => [
                        styles.button,
                        { opacity: pressed ? 0.5 : 1 }
                    ]}
                    onPress={() => console.log('Enter pressed')}
                >
                    <Text style={styles.buttonText}>Enter</Text>
                </Pressable>
                <Pressable
                    style={({ pressed }) => [
                        styles.link,
                        { opacity: pressed ? 0.5 : 1 }
                    ]}
                    onPress={() => console.log('Forgot Password pressed')}
                >
                    <Text style={styles.linkText}>Forgot Password?</Text>
                </Pressable>
                <View style={styles.signupContainer}>
                    <Text style={styles.signupText}>Don't have an account?</Text>
                    <Pressable
                        style={({ pressed }) => [
                            styles.link,
                            { opacity: pressed ? 0.5 : 1 }
                        ]}
                        onPress={() => console.log('Sign Up pressed')}
                    >
                        <Text style={[styles.linkText, styles.signupLinkText]}>Sign Up</Text>
                    </Pressable>
                </View>
                <Text style={styles.footerText}>
                    I want to receive the latest news, updates, and exclusive offers from QuantoCube!
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor: '#070707',
        backgroundColor: 'green',
        ///justifyContent: 'center',
        justifyContent: 'flex-end',
    },
    subcontainer: {
        
        flex: 1,
        backgroundColor: 'red',
        //backgroundColor: '#1b1b1b',
        padding: 20,
        justifyContent: 'center',
    },
    backButton: {
        position: 'absolute',
        top: 40,
        left: 20,
    },
    backButtonText: {
        fontSize: 24,
        color: '#fff',
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
        marginBottom: 20,
    },
    switchSiteButton: {
        alignSelf: 'center',
        marginBottom: 20,
    },
    switchSiteText: {
        color: '#fff',
        textDecorationLine: 'underline',
    },
    input: {
        height: 50,
        backgroundColor: '#333',
        borderRadius: 5,
        paddingHorizontal: 10,
        marginVertical: 10,
        color: '#fff',
    },
    button: {
        height: 50,
        backgroundColor: '#FE5823',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
    },
    link: {
        alignSelf: 'center',
    },
    linkText: {
        color: '#FE5823',
        textDecorationLine: 'underline',
    },
    signupContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    signupText: {
        color: '#fff',
    },
    signupLinkText: {
        marginLeft: 5,
    },
    footerText: {
        marginTop: 20,
        color: '#fff',
        textAlign: 'center',
    },
});