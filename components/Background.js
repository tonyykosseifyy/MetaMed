import Constants from 'expo-constants';
import { StyleSheet,  View , ImageBackground} from 'react-native';

import background from '../assets/back2.png'
import AppText from './AppText';

export default function Background({children, title, style}) {
  return (
    <ImageBackground source={background} style={styles.image}>
        <View style={styles.container}>
            <AppText style={styles.title}>{title}</AppText>
            <View style={{...styles.inner_container, ...style}}>
            {children}
            </View>
        </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
    container: {
      display:"flex",
   
      flex: 1,
    }
    ,
    image: {
      display: 'flex',
      flex: 1,
      width: '100%',
    },
    title: {
        paddingTop: 100 ,
        fontFamily: 'bold',
        fontSize: 45,
        textAlign: 'center',
        color: 'white'
    },
    inner_container: {
      marginTop: 8,
      flex: 1,
      padding: 16,
      borderTopRightRadius: 16,
      borderTopLeftRadius: 16 ,
      backgroundColor: 'white',
    }
  });
  