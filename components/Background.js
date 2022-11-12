import Constants from 'expo-constants';
import { StyleSheet,  View , ImageBackground} from 'react-native';

import background from '../assets/back2.png'
import AppText from './AppText';

export default function Background({children, title}) {
  return (
    <ImageBackground source={background} style={styles.image}>
        <View style={styles.container}>
            <AppText style={styles.title}>{title}</AppText>
            {children}
        </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
    container: {
      display:"flex",
      paddingHorizontal: 10,
    }
    ,
    image: {
      paddingTop: 120 ,
      flex: 1,
      width: '100%',
    },
    title: {
        fontFamily: 'bold',
        fontSize: 45,
        textAlign: 'center',
        color: 'white'
    }
  });
  