import { View, StyleSheet, FlatList, ActivityIndicator  } from 'react-native'
import AppButton from './AppButton'
import AppText from './AppText'
import Med from './Med'
import {MEDS} from '../DATABASE'
import PurchaseMeds from './PurchaseMeds'
import AppActivityIndicator from './AppActivityIndicator'

export default function Meds({meds, setIsPurchasing, isLoading}) {


  return (
    <View style={styles.container}>
      <AppText style={styles.title}>Meds</AppText>

      
      
     
      { isLoading?  
       <View style={styles.center_container}>
        <AppActivityIndicator/>
        <AppText>Analyzing prescription...</AppText>
        </View> 
       :
      meds.length === 0 ?  
      <View style={styles.center_container}>
        <AppText style={styles.center}>Please scan your prescription to see available meds</AppText> 
      </View> :
      <FlatList 
      showsVerticalScrollIndicator={false} 
      ListFooterComponent={<PurchaseMeds setIsPurchasing={setIsPurchasing} meds={meds}/>} 
      data={meds} 
      renderItem={(({item}) => <Med name={item} price={MEDS[item]}/>)}/>

      }

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        paddingHorizontal: '5%',
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
})