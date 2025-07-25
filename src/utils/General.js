import LinearGradient from "react-native-linear-gradient"
import { AppColors } from "./AppColors"
import { View } from "react-native";

export const LinearGradientView = ({ custom_height }) => {
    return (
        <View
            style={{ height: custom_height }}
        >
            <LinearGradient
                colors={[AppColors.gradient_1, AppColors.gradient_2, AppColors.gradient_3]}
                style={{ flex: 1, padding: 16, justifyContent: 'center' }}
            >
                {/* Optional content inside header */}
            </LinearGradient>
        </View>
    );
}