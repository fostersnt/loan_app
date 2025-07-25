import LinearGradient from "react-native-linear-gradient"
import { AppColors } from "./AppColors"
import { View } from "react-native";

export const LinearGradientView = ({ custom_height, custom_width }) => {
    return (
        <View
            style={{ height: custom_height, width: custom_width }}
        >
            <LinearGradient
                colors={['#2b0429ff', '#7a0f75ff', '#b606adff']}
                // colors={[AppColors.gradient_1, AppColors.gradient_2, AppColors.gradient_3]}
                style={{ width: custom_width, height: custom_height }}
            >
            </LinearGradient>
        </View>
    );
}