import React, { useState } from "react";
import { View , TouchableOpacity , StyleSheet} from 'react-native'
import AppText from './AppText'
import { Camera } from 'expo-camera'
import CameraPhoto from "./CameraPhoto"

let camera = Camera 

const CameraComponent = () => {
    const [previewVisible, setPreviewVisible] = useState(false)
    const [capturedImage, setCapturedImage] = useState(null)
    const __takePicture = async () => {
        const photo = await camera.takePictureAsync()
        console.log(photo)
        setPreviewVisible(true)
        setCapturedImage(photo)
    }

  
      return (
        <Camera
          ref={(r) => {
            camera = r
          }}
          style={styles.camera}
        >
          <View
            style={
              styles.camera_container
            }
          >
          <View
            style={styles.button_container}
          >
          <TouchableOpacity
            onPress={__takePicture}
            style={styles.button}
          />
        </View>
      </View>
  </Camera> )
  
} ;

const styles = StyleSheet.create({
  camera:{
    flex:1,
    width: '100%',

  },
  camera_container: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    flex: 1,
    width: '100%',
    padding: 20,
    justifyContent: 'space-between'
  },
  button_container: {
    alignSelf: 'center',
    flex: 1,
    alignItems: 'center'
  },
  button: { 
    width: 70,
    height: 70,
    bottom: 0,
    borderRadius: 50,
    backgroundColor: 'blue',
  }
})

export default CameraComponent ;