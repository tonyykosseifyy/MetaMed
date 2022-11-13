import { useFonts } from 'expo-font';
import LoadingPage from './Pages/LoadingPage';
import GeneratedQrCode from './Pages/GeneratedQrCode';
import Scan from './Pages/Scan';

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
  return <Scan/>;
}

