import React, { useState , useEffect } from "react" ;
import MapView, { PROVIDER_GOOGLE , Marker } from "react-native-maps" ;
import { View , Text, StyleSheet , StatusBar} from "react-native" ;
import AppButton from "../components/AppButton";
import MapViewDirections from 'react-native-maps-directions';
import * as Location from 'expo-location';


const GOOGLE_MAPS_APIKEY = 'AIzaSyDMOei5uHcZHiLsh-BYhdYYnkIsjr9PGsI';

//long 35.7212919
//lat 34.1013648  {latitude :34.098802, longitude: 35.723287 } orining {latitude :34.101935 , longitude: 35.719327 }

// ,    , 

const markers = [
    {
        latitude: 34.100934,
        longitude: 35.728651 
    },
    {
        latitude: 34.093649,
        longitude: 35.717880 
    },
    {
        latitude: 34.099654,
        longitude: 35.713803
    }
];

const Maps = () => {
    const [ location , setLocation ] = useState({}) ;
    const [ destination , setDestination ] = useState({});
    const getLocation = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            console.log("not grsnted")
            return;
        }
        let userLocation = await Location.getCurrentPositionAsync({});
        console.log("user location",userLocation)
        setLocation({
            latitude: userLocation.coords.latitude ,
            longitude: userLocation.coords.longitude
        });
    }
    console.log("location", location, "destination", destination);
    useEffect(() => {
        getLocation();
    }, []);

    return (
        <View style={styles.mainView}>
              <MapView
                provider={PROVIDER_GOOGLE}
                showsUserLocation={true}
                style={{height: "80%" , width: "100%"}}
                followsUserLocation={true}
                showsMyLocationButton={true}
                showsTraffic={true}
                >
                    <MapViewDirections
                        destination={destination}
                        apikey={GOOGLE_MAPS_APIKEY}
                        origin={ location }
                        strokeWidth={6}
                        strokeColor="red"
                    />
                    { markers.map((marker ,index) => (
                        <Marker key={index} onPress={(e) => destination.latitude ? setDestination({}) : setDestination(e.nativeEvent.coordinate)} coordinate={marker} />
                    ))}
                    <Marker onPress={(e) => destination.latitude ? setDestination({}) : setDestination(e.nativeEvent.coordinate)} coordinate={{latitude :34.101935 , longitude: 35.719327 }} />
            </MapView>
            <Text>Working</Text>
            <AppButton onClick={() => console.log()}>Navigate to my location</AppButton>
        </View>
    );
};


const styles = StyleSheet.create({
    mainView: {
      paddingTop: StatusBar.currentHeight ,
    },
});

export default Maps ;
