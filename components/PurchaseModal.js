

import {Modal, StyleSheet, SafeAreaView} from 'react-native'




export default function PurchaseModal({isPurchasing}) {


  return (
    <Modal visible={isPurchasing} animationType="fade">
      
        <SafeAreaView style={styles.container}>
        </SafeAreaView>
 
    </Modal>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

})