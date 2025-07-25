import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Alert,
    StatusBar,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import { AppColors } from '../../utils/AppColors';

export default function LoginScreen({ navigation }) {
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleContinue = () => {
        if (!phoneNumber) {
            Alert.alert('Error', 'Please enter your phone number.');
            return;
        }

        // Handle login logic here
        Alert.alert('Login Success', `Welcome back, ${phoneNumber}!`);
        navigation?.navigate('Dashboard');
    };

    return (
        <LinearGradient
            colors={[AppColors.gradient_1, AppColors.gradient_2, AppColors.gradient_3]}
            style={styles.container}
        >
            <StatusBar barStyle="light-content" />
            <View style={styles.card}>
                <Text style={styles.title}>Welcome 👋</Text>
                <Text style={styles.subtitle}>Enter your phone number</Text>

                <View style={styles.inputContainer}>
                    <Icon name="phone" size={18} color="#666" style={styles.icon} />
                    <TextInput
                        style={styles.input}
                        placeholder="phone number"
                        placeholderTextColor="#999"
                        keyboardType="email-address"
                        value={phoneNumber}
                        onChangeText={setPhoneNumber}
                        inputMode='numeric'
                    />
                </View>
                {/* <View style={styles.inputContainer}>
                    <Icon name="envelope" size={18} color="#666" style={styles.icon} />
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        placeholderTextColor="#999"
                        keyboardType="email-address"
                        value={email}
                        onChangeText={setEmail}
                    />
                </View> */}

                {/* <View style={styles.inputContainer}>
                    <Icon name="lock" size={20} color="#666" style={styles.icon} />
                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        placeholderTextColor="#999"
                        secureTextEntry
                        value={password}
                        onChangeText={setPassword}
                    />
                </View> */}

                <TouchableOpacity style={styles.button} onPress={handleContinue}>
                    <Text style={styles.buttonText}>Continue</Text>
                </TouchableOpacity>

                {/* <TouchableOpacity
                    onPress={() => navigation.navigate?.('Register')}
                >
                    <Text style={styles.footerText}>
                        Don't have an account? <Text style={styles.link}>Sign Up</Text>
                    </Text>
                </TouchableOpacity> */}
            </View>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },
    card: {
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 30,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 10 },
        shadowRadius: 10,
        elevation: 10,
    },
    title: {
        fontSize: 26,
        fontWeight: '700',
        color: '#333',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        color: '#666',
        marginBottom: 20,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F2F2F2',
        borderRadius: 10,
        marginBottom: 15,
        paddingHorizontal: 10,
    },
    icon: {
        marginRight: 10,
    },
    input: {
        flex: 1,
        height: 50,
        fontSize: 16,
        color: '#333',
    },
    button: {
        backgroundColor: '#3b5998',
        paddingVertical: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    footerText: {
        textAlign: 'center',
        color: '#666',
    },
    link: {
        color: '#3b5998',
        fontWeight: '600',
    },
});
