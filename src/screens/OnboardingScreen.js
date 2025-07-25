import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, StatusBar, Dimensions } from 'react-native';
import { AppSettings } from '../utils/AppSettings';
import FastImage from 'react-native-fast-image';
import LinearGradient from 'react-native-linear-gradient';
import { CustomButton } from '../utils/General';

const img = require('../../assets/images/breaking_barriers_rafiki.png');

export default function OnboardingScreen({ navigation }) {
    const screenWidth = Dimensions.get('window').width;

    const handleClick = () => navigation?.navigate('Login')

    return (
        <View style={styles.container}>
            {/* Transparent StatusBar */}
            <StatusBar
                translucent
                backgroundColor="transparent"
                barStyle="dark-content" // or "light-content"
            />
            {/* Logo */}
            {/* <Text style={styles.logo}>🔍 QuickCash</Text> */}

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
            <View style={{ width: screenWidth, alignItems: 'center' }}>
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
            {/* <TouchableOpacity style={styles.button} onPress={() => navigation?.navigate('Login')}>
                <Text style={styles.buttonText}>Get Started</Text>
            </TouchableOpacity> */}

            {/* <LinearGradient
                colors={[AppSettings.Color.gradient_3, AppSettings.Color.gradient_2, AppSettings.Color.gradient_1]}
                // colors={[AppSettings.Color.gradient_1, AppSettings.Color.gradient_2, AppSettings.Color.gradient_3]}
                style={{ width: '100%', height: AppSettings.Measurement.button_height, justifyContent: 'center', alignItems: 'center', borderRadius: AppSettings.Measurement.border_radius }}
            >
                <TouchableOpacity style={styles.button} onPress={() => navigation?.navigate('Login')}>
                    <Text style={styles.buttonText}>Get Started</Text>
                </TouchableOpacity>
            </LinearGradient> */}
            {/* <CustomButton width={screenWidth} btn_text={'Get Started'} action={handleClick}/> */}
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
        color: AppSettings.Color.main_theme,
        marginBottom: 20,
    },
    headline: {
        marginBottom: 20,
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        color: AppSettings.Color.gradient_3,
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
        // backgroundColor: AppSettings.Color.gradient_3,
        // paddingVertical: 15,
        // paddingHorizontal: 50,
        // marginBottom: 20,
        width: '100%',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
    signInText: {
        color: AppSettings.Color.main_theme,
        fontSize: 16,
    },
});
