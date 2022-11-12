import React from 'react'
import AppText from '../components/AppText'
import Background from '../components/Background'
import { StyleSheet, View, TouchableOpacity} from 'react-native'

 const QrCode = () => {
  return (
   <Background>
		<View style={styles.container}>
      <TouchableOpacity style={styles.touchableOpacity}>
        <AppText>Take picture</AppText>
        </TouchableOpacity>
		</View>
   </Background>
  )
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "red",
  },
  touchableOpacity: {
    width: 130,
    borderRadius: 4,
    backgroundColor: '#14274e',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40
  }
})

export default QrCode ;