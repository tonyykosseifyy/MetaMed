import { useFonts } from 'expo-font';
import LoadingPage from './Pages/LoadingPage';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './navigators/TabNavigator';
import StackNavigator from './navigators/StackNavigator';




export default function App() {
  const [fontsLoaded] = useFonts({
    'regular': require('./assets/fonts/Poppins-Regular.ttf'),
    'bold': require('./assets/fonts/Poppins-Bold.ttf'),
    'italic': require('./assets/fonts/Poppins-Italic.ttf'),
    'medium': require('./assets/fonts/Poppins-Medium.ttf'),
  });
  if (!fontsLoaded){
    return <LoadingPage/>
  }
  return <NavigationContainer>
    <StackNavigator/>
  </NavigationContainer>;
}

