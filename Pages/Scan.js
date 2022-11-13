
import Modal from 'react-native';
import Background from '../components/Background';

import { useEffect, useState } from 'react';
import AppText from '../components/AppText';
import PickImage from '../components/PickImage';
import Meds from '../components/Meds';
import PurchaseModal from '../components/PurchaseModal';

import { MEDS } from '../DATABASE';

export default function Scan() {
    const [meds, _setMeds] = useState([]);
    const [isPurchasing, setIsPurchasing] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const setMeds = (meds) => {
      _setMeds(meds.filter((med) => MEDS[med.toLowerCase()]).map(med=> med.toLowerCase()))
    }
    
    return <Background title='Scan'>

     
     
      <PickImage setIsLoading={setIsLoading} setMeds={setMeds}/>
      <Meds isLoading={isLoading} meds={meds} setIsPurchasing={setIsPurchasing}/>
      <PurchaseModal meds={meds} setMeds={setMeds} isPurchasing={isPurchasing} setIsPurchasing={setIsPurchasing}/>
    </Background>
    
} ;


