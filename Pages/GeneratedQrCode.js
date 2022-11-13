import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'
import AppText from '../components/AppText'
import QRCode from '../components/QrCodeComponent'
import { useRoute } from '@react-navigation/native'

export default function GeneratedQrCode() {
  
  const meds = useRoute().params?.meds ?? 'Halloween';

  return (
    <View style={styles.container}>
        <AppText style={styles.text}>Thank you for using MetaMed! Here is your generated Qr Code that you can claim at the nearest vending machine.</AppText>
        <View style={styles.qrCode_container}>
          <QRCode content={JSON.stringify(meds)}/>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
      flex: 1,
      padding: 16,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
    },
    text:{
      textAlign: 'center'
    },
    qrCode_container: {
      marginVertical: 16,
    }
})