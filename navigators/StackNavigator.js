import { createStackNavigator } from '@react-navigation/stack';
import QRCode from '../Pages/GeneratedQrCode';
import TabNavigator from './TabNavigator';

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerStyle: {backgroundColor: '#00baf2'}, headerTintColor: 'white',headerTitleStyle: {fontFamily: 'regular'}}}>
      <Stack.Screen options={{headerShown: false}} name="MetaMed" component={TabNavigator} />
      <Stack.Screen name="QrCode" component={QRCode} />
    </Stack.Navigator>
  );
}