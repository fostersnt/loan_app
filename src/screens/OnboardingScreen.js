import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, StatusBar, Dimensions } from 'react-native';
import { AppSettings } from '../utils/AppSettings';
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
                barStyle="dark-content"
            />

            <View style={styles.content}>
                <Text style={styles.headline}>Get Loans Instantly</Text>
                <Text style={styles.subText}>Safe, Simple, Secure.</Text>

                <Image
                    source={img}
                    style={[styles.image, { width: screenWidth * 0.8 }]}
                    resizeMode="contain"
                />

                <CustomButton
                    width={screenWidth * 0.9}
                    btn_text={'Get Started'}
                    action={handleClick}
                />
            </View>
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
    image: {
        // width: '100%',
        height: 250,
        marginBottom: 30,
        alignItems: 'center'
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
