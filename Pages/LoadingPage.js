import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function LoadingPage() {
  return (
    <View style={styles.container}>
      <Text>Loading...</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
})