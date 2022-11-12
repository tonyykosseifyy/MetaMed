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
        margin: 8,
        backgroundColor: 'lightblue',
        borderRadius: 6,
    },
})