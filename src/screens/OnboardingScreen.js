import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, StatusBar } from 'react-native';
import { AppColors } from '../utils/AppColors';
import FastImage from 'react-native-fast-image';

const img = require('../../assets/images/breaking_barriers_rafiki.png');

export default function OnboardingScreen({ navigation }) {
    return (
        <View style={styles.container}>
            {/* Transparent StatusBar */}
            <StatusBar
                translucent
                backgroundColor="transparent"
                barStyle="dark-content" // or "light-content"
            />
            {/* Logo */}
            <Text style={styles.logo}>🔍 QuickCash</Text>

            {/* Headline */}
            <Text style={styles.headline}>Get Loans Instantly</Text>
            <Text style={styles.subText}>Safe, Simple, Secure.</Text>

            {/* Illustration (replace with actual image path if available) */}
            {/* <FastImage
                style={{ width: 100, height: 100 }}
                source={{
                    uri: 'https://secure-url.com/image.png',
                    headers: { Authorization: 'Bearer token' },
                    priority: FastImage.priority.normal,
                }}
                resizeMode={FastImage.resizeMode.contain}
            /> */}
            <View style={{ width: '100%', alignItems: 'center' }}>
                <FastImage
                style={styles.fastImage}
                source={img} // ✅ Must use require()
                resizeMode={FastImage.resizeMode.cover}
            />
            </View>
            {/* <Image
                source={img} // Replace with your actual illustration
                style={styles.image}
                resizeMode="contain"
            /> */}

            {/* Buttons */}
            <TouchableOpacity style={styles.button} onPress={() => navigation?.navigate('Login')}>
                <Text style={styles.buttonText}>Get Started</Text>
            </TouchableOpacity>

            {/* <TouchableOpacity onPress={() => navigation?.navigate('Login')}>
                <Text style={styles.signInText}>Login</Text>
            </TouchableOpacity> */}
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
        color: AppColors.main_theme,
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
    fastImage: {
        width: '100%',
        height: 250,
        marginBottom: 30,
    },
    button: {
        backgroundColor: AppColors.main_theme,
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
        color: AppColors.main_theme,
        fontSize: 16,
    },
});
