import { View, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import AppText from './AppText'

export default function AppButton({children, style, onClick}) {
  return (
    <TouchableOpacity onPress={onClick}>
        <View style={{...styles.btn, ...style}}>
         <AppText style={styles.btn_text}>{children}</AppText>
        </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    btn: {
        padding: 8,
        backgroundColor: '#00baf2',
       
        borderRadius: 6,
    },
    btn_text: {
      fontFamily: 'medium',
      color: 'white',
    }
})