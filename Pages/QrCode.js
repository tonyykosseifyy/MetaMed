
import Background from '../components/Background'
import { StyleSheet, Dimensions, Button, Image, View} from 'react-native'

import AppText from '../components/AppText';
import PickImage from '../components/PickImage';




export default function QrCode() {
  
    return <Background>
      <View style={styles.title_container}>
        <AppText style={styles.title}>Scan</AppText>
      </View>
      <PickImage/>
     
    </Background>
    
} ;

const styles = StyleSheet.create({
  title_container: {
    paddingVertical: 100,
  },
  title: {
    fontFamily: 'bold', 
    color: 'white',
    textAlign: 'center',
    fontSize: 45,
  },
  

})



