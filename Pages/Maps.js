import React, { useState , useEffect } from "react" ;
import {MARKERS} from '../DATABASE';
import MapView, { PROVIDER_GOOGLE , Marker } from "react-native-maps" ;
import { View , Text, StyleSheet , StatusBar} from "react-native" ;
import AppButton from "../components/AppButton";
import MapViewDirections from 'react-native-maps-directions';
import * as Location from 'expo-location';
import Background from "../components/Background";


const GOOGLE_MAPS_APIKEY = 'AIzaSyDMOei5uHcZHiLsh-BYhdYYnkIsjr9PGsI';

//long 35.7212919
//lat 34.1013648  {latitude :34.098802, longitude: 35.723287 } orining {latitude :34.101935 , longitude: 35.719327 }

// ,    , 


const Maps = () => {
    const [ location , setLocation ] = useState({}) ;
    const [ destination , setDestination ] = useState({});
    const getLocation = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            console.log("not granted")
            return;
        }
        let userLocation = await Location.getCurrentPositionAsync({});
       
        setLocation({
            latitude: userLocation.coords.latitude ,
            longitude: userLocation.coords.longitude
        });
    }
   
    useEffect(() => {
        getLocation();
    }, []);

    return (
       <Background title='Map'>
       
              <MapView
                provider={PROVIDER_GOOGLE}
                showsUserLocation={true}
                style={styles.map}
                followsUserLocation={true}
                showsMyLocationButton={true}
                showsTraffic={true}
                >
                    <MapViewDirections
                        destination={destination.latitude && destination}
                        apikey={GOOGLE_MAPS_APIKEY}
                        origin={ location.latitude && location }
                        strokeWidth={6}
                        strokeColor="red"
                    />
                    { MARKERS.map((marker ,index) => (
                        <Marker key={index} onPress={(e) => destination.latitude ? setDestination({}) : setDestination(e.nativeEvent.coordinate)} coordinate={marker} />
                    ))}
                    <Marker onPress={(e) => destination.latitude ? setDestination({}) : setDestination(e.nativeEvent.coordinate)} coordinate={{latitude :34.101935 , longitude: 35.719327 }} />
            </MapView>

       </Background>
    );
};


const styles = StyleSheet.create({
  map:{
    height: "100%" , 
    width: "100%",
    borderWidth: 3,
    borderColor: '#00baf2'
  }
});

export default Maps ;
