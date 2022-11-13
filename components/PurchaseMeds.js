import { View , StyleSheet} from 'react-native'
import AppText from './AppText'
import AppButton from './AppButton'
import {MEDS} from '../DATABASE'

export default function PurchaseMeds({meds, setIsPurchasing}) {
  const total_price = meds.reduce((previous_value, med) => previous_value + (MEDS[med] ?? 0),0);

  return (
    <>
    <View style={styles.divider}/>
    <View style={styles.purchase_grp}>
        
   
        <AppText style={{fontFamily: 'bold'}}>Total: {total_price}$</AppText>
        <AppButton onClick={() => setIsPurchasing(true)} style={styles.btn_purchase}>
            <AppText style={styles.center}>Purchase</AppText>
        </AppButton>
     
      </View>
      </>
    
  )
}


const styles = StyleSheet.create({
    btn_purchase: {
    },
    purchase_grp: {

        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
    },
    divider: {
        borderBottomColor: '#00baf2',
        borderBottomWidth: StyleSheet.hairlineWidth,
        marginVertical: 8,
    },
})