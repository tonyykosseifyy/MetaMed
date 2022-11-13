

import {Modal, StyleSheet, SafeAreaView} from 'react-native'
import { CreditCardInput, LiteCreditCardInput } from "react-native-credit-card-input";



export default function PurchaseModal({isPurchasing}) {


  return (
    <Modal visible={isPurchasing} animationType="fade">
      
        <SafeAreaView style={styles.container}>
        <CreditCardInput onChange={this._onChange} />
        </SafeAreaView>
 
    </Modal>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

})