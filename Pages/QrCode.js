import React from 'react'
import AppText from '../components/AppText'
import Background from '../components/Background'
import { StyleSheet, Dimensions,  View, TouchableOpacity} from 'react-native'
let ScreenHeight = Dimensions.get("window").height;

import { Camera } from 'expo-camera'
let camera = Camera


 const QrCode = () => {
  const [startCamera,setStartCamera] = React.useState(false)
  const __startCamera = async () => {
    const {status} = await Camera.requestPermissionsAsync()
    if(status === 'granted'){
      setStartCamera(true) 
   } else{
     Alert.alert("Access denied")
   }}
  
    { startCamera ? (
      <Camera
        style={{flex: 1,width:"100%"}}
        ref={(r) => {
          camera = r
        }}
      ></Camera>
    ): 
   ( <Background>
		<View style={styles.container}>
      <TouchableOpacity onPress={__startCamera} style={styles.touchableOpacity}>
        <AppText>Take picture</AppText>
      </TouchableOpacity>
		</View>
   </Background>
   )
}};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    alignItems: 'center',
    justifyContent: 'center',
    height: ScreenHeight,
    backgroundColor: "red",
    
  },
  touchableOpacity: {
    width: 130,
    borderRadius: 4,
    backgroundColor: '#14274e',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
  }
})

export default QrCode ;


