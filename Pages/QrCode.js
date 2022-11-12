import axios from 'axios'; 
import {useState} from 'react'
import Background from '../components/Background'
import { StyleSheet, Dimensions, Button, Image, View} from 'react-native'
import * as ImagePicker from 'expo-image-picker';
import AppText from '../components/AppText';

const API_KEY = 'AIzaSyD2tR4AqjSrgyP8JCVJvMBTzRF35n_M0EU';
const API_URL = `https://vision.googleapis.com/v1/images:annotate?key=${API_KEY}`;

async function callGoogleVisionAsync(image) {
  const body = {
    requests: [
      {
        image: {
          content: image,
        },
        features: [
          {
            type: 'LABEL_DETECTION',
            maxResults: 1,
          },
        ],
      },
    ],
  };
  
  try{
    console.log('HERE1')
    const response = await axios.post(API_URL, body)
    console.log(response.status)
  
    return result.responses[0].labelAnnotations[0].description;
  } catch(e) {
    console.log('HERE!!')
    console.log(e)
  }
}

export default function QrCode() {
  
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    let permissionResult = await ImagePicker.requestCameraPermissionsAsync();
    if (permissionResult.granted === false){
      alert('Permission to access camera roll is required!');
      return;
    }
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      aspect: [4, 3],
      quality: 1,
      base64: true
    });
    
    if (!result.canceled) {
      setImage(result.assets[0].uri);
      console.log(await callGoogleVisionAsync(result.base64))
  };
}

      
    return <Background>
      <View style={styles.title_container}>
        <AppText style={styles.title}>Scan</AppText>
      </View>
     
     <Button onPress={pickImage} title='Take image'/>

    
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
  }
})



