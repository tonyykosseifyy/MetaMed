import React, {useState} from 'react'
import AppText from '../components/AppText'
import Background from '../components/Background'
import { StyleSheet, Dimensions,  View, TouchableOpacity ,Text} from 'react-native'
import { Camera } from 'expo-camera'
import CameraComponent from "../components/Camera"
let ScreenHeight = Dimensions.get("window").height;


const QrCode = () => {
  const [startCamera,setStartCamera] = React.useState(false)
  const startCameraFunc = async () => {
    const {status} = await Camera.requestCameraPermissionsAsync()
    if(status === 'granted'){
      setStartCamera(true) 
    } else{
      Alert.alert("Access denied")
    }}

    if (startCamera) {
      return (
        <CameraComponent/>
      )
    } else {
      return (
        <Background>
         <View style={styles.container}>
           <TouchableOpacity onPress={startCameraFunc} style={styles.touchableOpacity}>
             <AppText>Take picture</AppText>
           </TouchableOpacity>
         </View>
         </Background>
       )
    } 
} ;

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


