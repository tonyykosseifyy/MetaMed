import {meds} from '../DATABASE'
import { View , StyleSheet} from 'react-native'
import AppText from './AppText'

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export default function Med({name, price}) {
  return (
    <View style={styles.med_container}>
      <AppText>{capitalizeFirstLetter(name)}</AppText>
      <AppText style={styles.price}>{price}$</AppText>
    </View>
  )
}

const styles = StyleSheet.create({
    med_container: {
        marginVertical: 4,
        width:'100%',
        backgroundColor: '#00baf2',
        padding: 8,
        borderRadius: 8,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    price: {
        fontFamily: 'bold'
    }
})