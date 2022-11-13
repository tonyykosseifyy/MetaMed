import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'
import AppText from '../components/AppText'
import QRCode from '../components/QrCodeComponent'

export default function GeneratedQrCode({purchased}) {
  return (
    <View style={styles.container}>
        <AppText style={styles.text}>Thank you for using our app! Here is your generated Qr Code that you can claim at the nearest vending machine.</AppText>
        <View style={styles.qrCode_container}>
          <QRCode content='Halloween'/>
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