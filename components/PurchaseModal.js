

import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import {Modal, View, StyleSheet, Keyboard, Text, KeyboardAvoidingView, TouchableWithoutFeedback, useWindowDimensions, Dimensions} from 'react-native'
import { CreditCardInput, LiteCreditCardInput } from "react-native-credit-card-input";
import { storeTranscript } from '../database/transcripts';
import AppButton from './AppButton';


export default function PurchaseModal({meds, isPurchasing, setIsPurchasing, setMeds}) {
  
  const [valid, setValid] = useState(false)
  const navigation = useNavigation();
  const cancel = () => {
    setValid(false);
     setIsPurchasing(false);
  }

  const purchase = () => {
    
    const today = new Date();
    const transcript = {date: today, meds }
    storeTranscript(transcript)
    setMeds([])
    setIsPurchasing(false);
    navigation.navigate('QrCode', {title: today.toLocaleDateString(),meds});
  }

  const onChange = ({valid}) => {
    setValid(valid)
  }


  return (
    <Modal transparent={true} visible={isPurchasing} animationType="fade">
     <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
     <View style={styles.backdrop}>
        <View style={styles.content}>
      
          <Text style={styles.title}>Complete Payement</Text>
            <KeyboardAvoidingView behavior='padding'>
              <CreditCardInput onChange={onChange} cardFontFamily='regular'/>
            </KeyboardAvoidingView>
            <View style={styles.btn_group}>
              <AppButton onClick={cancel} style={styles.cancel_btn}>Cancel</AppButton>
              <AppButton disabled={!valid} onClick={purchase}>Proceed</AppButton>
            </View>

            
           
        </View>
      </View>
     </TouchableWithoutFeedback>
        
 
    </Modal>
  )
}

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',

  },
  title:{
    fontSize: 20,
    fontFamily: 'bold',
    textAlign: 'center',
  },
  content: {
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: 'white',
    marginTop: 0.2 * Dimensions.get('window').height,
    width: '100%',
  },
  btn_group: {
    justifyContent: 'flex-end',
    
    flexDirection: 'row',
    paddingVertical: 16,
  },
  cancel_btn: {
    marginRight: 8,
    backgroundColor: 'red',
  }

})