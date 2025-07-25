import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import HomeScreen from './src/screens/dashboard/Dashboard';
import DetailsScreen from './src/screens/DetailsScreen';
import LoginScreen from './src/screens/auth/LoginScreen';
import OnboardingScreen from './src/screens/OnboardingScreen';
import Dashboard from './src/screens/dashboard/Dashboard';
import { LinearGradientView } from './src/utils/General';

const Stack = createNativeStackNavigator();

export default function App() {
  const screenWidth = Dimensions.get('window').width;

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Onboarding">
        <Stack.Screen name="Onboarding" component={OnboardingScreen} options={{
          header: null
        }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{
          header: null
        }} />
        <Stack.Screen name="Dashboard" component={Dashboard} options={{
          header: () => <LinearGradientView custom_height={100} custom_width={ screenWidth } />
        }} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    height: 100,
    backgroundColor: "#e65f06ff"
  }
});
