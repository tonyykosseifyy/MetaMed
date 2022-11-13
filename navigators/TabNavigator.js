import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Maps from "../Pages/Maps";
import QrCode from "../Pages/QrCode";
import Transcripts from "../Pages/Transcripts";
import {AntDesign, FontAwesome, } from '@expo/vector-icons'

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}> 
      <Tab.Screen options={{
        tabBarIcon: ({ focused, color, size }) => {
          return <FontAwesome name='map-marker' size={size} color={color} />;
        },
      }} name="Maps" component={Maps}/>
      <Tab.Screen options={{
        tabBarIcon: ({ focused, color, size }) => {
          return <AntDesign name='scan1' size={size} color={color} />;
        },
      }} name="Scan" component={QrCode}/>
      <Tab.Screen  options={{
        tabBarIcon: ({ focused, color, size }) => {
          return <FontAwesome name='list-alt' size={size} color={color} />;
        },
      }}name="Transcripts" component={Transcripts}/>
    </Tab.Navigator>
  )
}