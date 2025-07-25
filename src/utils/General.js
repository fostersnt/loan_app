import LinearGradient from "react-native-linear-gradient"
import { AppSettings } from "./AppSettings"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export const LinearGradientView = ({ custom_height, custom_width }) => {
    return (
        <View
            style={{ height: custom_height, width: custom_width }}
        >
            <LinearGradient
                // colors={['#2b0429ff', '#7a0f75ff', '#b606adff']}
                colors={[AppSettings.Color.gradient_3, AppSettings.Color.gradient_3, AppSettings.Color.white]}
                style={{ width: custom_width, height: custom_height }}
            >
            </LinearGradient>
        </View>
    );
}

export const CustomButton = ({ width, action, btn_text }) => {
    return (
        <LinearGradient
            colors={[AppSettings.Color.gradient_3, AppSettings.Color.white, AppSettings.Color.gradient_3]}
            style={{ width: width, height: AppSettings.Measurement.btn_height, justifyContent: 'center', alignItems: 'center', borderRadius: AppSettings.Measurement.border_radius }}
        >
            <TouchableOpacity style={[styles.button, { width: width, paddingVertical: AppSettings.Measurement.btn_padding_vertical }]} onPress={action}>
                <Text style={styles.buttonText}>{btn_text}</Text>
            </TouchableOpacity>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    button: {
        // backgroundColor: AppSettings.Color.gradient_3,
        // paddingVertical: 15,
        // paddingHorizontal: 50,
        // marginBottom: 20,
        alignItems: 'center',
    },
    buttonText: {
        // backgroundColor: AppSettings.Color.gradient_3,
        // paddingVertical: 15,
        // paddingHorizontal: 50,
        // marginBottom: 20,
        fontWeight: "bold",
        // color: AppSettings.Color.white,
        alignItems: 'center',
    }
})