import { View, StyleSheet, FlatList  } from 'react-native'
import AppButton from './AppButton'
import AppText from './AppText'
import Med from './Med'
import {MEDS} from '../DATABASE'
import PurchaseMeds from './PurchaseMeds'

export default function Meds({meds, setIsPurchasing}) {


  return (
    <View style={styles.container}>
      <AppText style={styles.title}>Meds</AppText>

      
      {meds.length === 0 ? 
      <View style={styles.center_container}>
        <AppText style={styles.center}>Please scan your prescription to see available meds</AppText>
        </View> : 
      <View>      
     
       <FlatList showsVerticalScrollIndicator={false} ListFooterComponent={<PurchaseMeds setIsPurchasing={setIsPurchasing} meds={meds}/>} data={meds} renderItem={(({item}) => MEDS[item] && <Med name={item} price={MEDS[item]}/>)}/>
     
      
      </View>
      }
   
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
    },
   
    title: {
        fontSize: 30,
        textAlign: 'center',
        fontFamily: 'medium',
    },
    center: {
        textAlign: 'center'
    },
    center_container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btn_purchase: {
    },
    purchase_grp: {
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between', 
    marginTop: 8,
    }
})