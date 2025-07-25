import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function OnboardingScreen({ navigation }) {
    return (
        <View style={styles.container}>
            {/* Logo */}
            <Text style={styles.logo}>🔍 QuickCash</Text>

            {/* Headline */}
            <Text style={styles.headline}>Get Loans Instantly</Text>
            <Text style={styles.subText}>Safe, Simple, Secure.</Text>

            {/* Illustration (replace with actual image path if available) */}
            {/* <Image
                source={require('./assets/loan-illustration.png')} // Replace with your actual illustration
                style={styles.image}
                resizeMode="contain"
            /> */}

            {/* Buttons */}
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Get Started</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation?.navigate('SignIn')}>
                <Text style={styles.signInText}>Sign In</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#3B82F6',
        marginBottom: 20,
    },
    headline: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#111',
    },
    subText: {
        fontSize: 16,
        color: '#555',
        marginTop: 10,
        textAlign: 'center',
        marginBottom: 30,
    },
    image: {
        width: 250,
        height: 250,
        marginBottom: 30,
    },
    button: {
        backgroundColor: '#3B82F6',
        paddingVertical: 15,
        paddingHorizontal: 50,
        borderRadius: 10,
        marginBottom: 20,
        width: '100%',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
    signInText: {
        color: '#3B82F6',
        fontSize: 16,
    },
});
