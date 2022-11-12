import { View, StyleSheet, Button } from 'react-native'
import {recognizeText} from '../Api/third_party'
import * as ImagePicker from 'expo-image-picker';
import AppButton from './AppButton';

export default function PickImage() {

    const pickImage = async (fromLibrary = false) => {
        let permissionResult = await ImagePicker.requestCameraPermissionsAsync();
        if (permissionResult.granted === false){
            alert('Permission to access camera roll is required!');
            return;
        }

        const pickImageFunction = fromLibrary === true? ImagePicker.launchImageLibraryAsync: ImagePicker.launchCameraAsync
            
        let result = await pickImageFunction({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            aspect: [4, 3],
            quality: 1,
            base64: true
        });
        
        if (!result.canceled) {
            setImage(result.assets[0].uri);
            console.log(await recognizeText(result.base64))
        };
    }

  return (
    <View style={styles.btn_group}>
        <AppButton style={styles.imageBtn} onClick={pickImage}>Take image</AppButton>
        <AppButton style={styles.imageBtn} onClick={() => pickImage(true)}>Choose image</AppButton>
      </View>
    
  )
}

const styles = StyleSheet.create({
    btn_group: {
     paddingVertical: 30,
     display: 'flex',
     flexDirection: 'row',
     justifyContent: 'space-around',
    }
    
  
  })
  