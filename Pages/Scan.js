
import Modal from 'react-native';
import Background from '../components/Background';

import { useEffect, useState } from 'react';
import AppText from '../components/AppText';
import PickImage from '../components/PickImage';
import Meds from '../components/Meds';
import PurchaseModal from '../components/PurchaseModal';

import { MEDS } from '../DATABASE';

export default function Scan() {
    const [meds, _setMeds] = useState(['paracetemol', 'paracetemol', 'profinal', 'profinal', 'profinal']);
    const [isPurchasing, setIsPurchasing] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const setMeds = (meds) => {
      _setMeds(meds.filter((med) => MEDS[med]))
    }
    
    return <Background title='Scan'>

     
     
      <Meds isLoading={isLoading} meds={meds} setIsPurchasing={setIsPurchasing}/>
      <PurchaseModal meds={meds} setMeds={setMeds} isPurchasing={isPurchasing} setIsPurchasing={setIsPurchasing}/>
      <PickImage setIsLoading={setIsLoading} setMeds={setMeds}/>
    </Background>
    
} ;


