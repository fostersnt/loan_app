import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    // TouchableOpacity,
    StyleSheet,
    Alert,
    StatusBar,
    Dimensions,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import { AppSettings } from '../../utils/AppSettings';
import { CustomButton } from '../../utils/General';

export default function LoginScreen({ navigation }) {
    const [phoneNumber, setPhoneNumber] = useState('');
    const screenWidth = Dimensions.get('window').width;

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
            colors={[AppSettings.Color.gradient_3, AppSettings.Color.gradient_2, AppSettings.Color.gradient_1]}
            style={styles.container}
        >
            <StatusBar barStyle="light-content" />
            <View style={styles.card}>
                <Text style={styles.title}>Welcome 👋</Text>
                <Text style={styles.subtitle}>Enter your phone number</Text>

                <View style={styles.inputContainer}>
                    <Icon name="phone" size={18} color="#666" style={styles.icon} />
                    <TextInput
                        style={[styles.input, {width: (screenWidth - 40)}]}
                        placeholder="phone number"
                        placeholderTextColor="#999"
                        keyboardType="numeric"
                        value={phoneNumber}
                        onChangeText={setPhoneNumber}
                        inputMode='numeric'
                    />
                </View>
                <View style={{ width: '100%', alignItems: 'center' }}>
                    <CustomButton width={(screenWidth - 40)} btn_text={'Continue'} action={handleContinue} />
                </View>
                {/* <CustomButton width={screenWidth} btn_text={'Continue'} action={handleContinue} /> */}
            </View>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 10,
    },
    card: {
        backgroundColor: 'white',
        // borderRadius: 20,
        padding: 30,
        shadowColor: '#fff',
        // shadowColor: '#000',
        shadowOpacity: 0.2,
        // shadowOffset: { width: 0, height: 10 },
        shadowRadius: 30,
        elevation: 30,
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
        // width: '100%',
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
        backgroundColor: AppSettings.Color.gradient_3,
        paddingVertical: AppSettings.Measurement.btn_padding_vertical,
        borderRadius: AppSettings.Measurement.border_radius,
        alignItems: 'center',
        height: AppSettings.Measurement.btn_height,
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
