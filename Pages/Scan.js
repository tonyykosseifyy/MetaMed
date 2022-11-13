
import Modal from 'react-native';
import Background from '../components/Background';

import { useState } from 'react';
import { StyleSheet, Dimensions, Button, Image, View,} from 'react-native'

import AppText from '../components/AppText';
import PickImage from '../components/PickImage';
import Meds from '../components/Meds';
import PurchaseModal from '../components/PurchaseModal';



export default function Scan() {
    const [meds, setMeds] = useState([]);
    const [isPurchasing, setIsPurchasing] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    
    return <Background title='Scan'>

     
      <PickImage setIsLoading={setIsLoading} setMeds={setMeds}/>
      <Meds isLoading={isLoading} meds={meds} setIsPurchasing={setIsPurchasing}/>
      <PurchaseModal isPurchasing={isPurchasing} setIsPurchasing={setIsPurchasing}/>

    </Background>
    
} ;

const styles = StyleSheet.create({
  title_container: {
    paddingVertical: 105,
  },
  title: {
    fontFamily: 'bold', 
    color: 'white',
    textAlign: 'center',
    fontSize: 45,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
   
  }
  

})



