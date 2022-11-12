import React from "react" ;
import { View , ImageBackground , Text } from "react-native";
import MlkitOcr from 'react-native-mlkit-ocr';

const CameraPhoto = ({photo}) => {
    console.log('Photo: ', photo)
    const resultFromUri = async () => MlkitOcr.detectFromUri(uri);
    console.log(resultFromUri)
    return (
      <View
        style={{
          backgroundColor: 'transparent',
          flex: 1,
          width: '100%',
          height: '100%'
        }}
      >
        <ImageBackground
          source={{uri: photo && photo.uri}}
          style={{
            flex: 1
          }}
        />
        <Text>
            {resultFromUri}
        </Text>
      </View>
    )
};

export default CameraPhoto ;