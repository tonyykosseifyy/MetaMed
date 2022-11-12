import React, { useState } from "react";
import { View , TouchableOpacity } from 'react-native'
import { Camera } from 'expo-camera'
import CameraPhoto from "./CameraPhoto";

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
    if (capturedImage) {
        return (
            <CameraPhoto photo={capturedImage} />
        )
    } 
    else {
        return (
          <Camera
            style={{flex: 1,width:"100%"}}
            ref={(r) => {
              camera = r
            }}
          >
            <View
              style={{
              position: 'absolute',
              bottom: 0,
              flexDirection: 'row',
              flex: 1,
              width: '100%',
              padding: 20,
              justifyContent: 'space-between'
              }}
            >
            <View
              style={{
              alignSelf: 'center',
              flex: 1,
              alignItems: 'center'
            }}
            >
            <TouchableOpacity
              onPress={__takePicture}
              style={{
              width: 70,
              height: 70,
              bottom: 0,
              borderRadius: 50,
              backgroundColor: '#fff'
              }}
            />
          </View>
        </View>
    </Camera> )
    }
} ;

export default CameraComponent ;