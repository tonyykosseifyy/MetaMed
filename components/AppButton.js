import { View, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import AppText from './AppText'

export default function AppButton({children, style, onClick, disabled}) {

  const styles = getStyles(disabled)
  return (
    <TouchableOpacity disabled={disabled} onPress={onClick}>
        <View style={{ ...styles.btn, ...style}}>
         <AppText style={styles.btn_text}>{children}</AppText>
        </View>
    </TouchableOpacity>
  )
}

const getStyles = (disabled) => StyleSheet.create({
    btn: {
        padding: 8,
        backgroundColor: disabled? 'gray': '#00baf2',
       
        borderRadius: 6,
    },
    btn_text: {
      fontFamily: 'medium',
      color: 'white',
    },

})