import { View, Text, Button, StatusBar } from 'react-native';

export default function Dashboard({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {/* <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content" // or "light-content"
      /> */}
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
      <Button
        title="LOGIN"
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  );
}
