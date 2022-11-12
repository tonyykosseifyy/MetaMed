import AppText from '../components/AppText'
import Background from '../components/Background'

export default function QrCode() {
  return (
   <Background title='Scan'>
    <AppText style={{fontFamily: 'italic'}}></AppText>
   </Background>
  )
}