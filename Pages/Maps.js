import React, { useState , useEffect } from "react" ;
import MapView, { PROVIDER_GOOGLE , Marker } from "react-native-maps" ;
import { View , Text, StyleSheet , StatusBar} from "react-native" ;
import AppButton from "../components/AppButton";
import MapViewDirections from 'react-native-maps-directions';

const origin = {latitude: 37.3318456, longitude: -122.0296002};
const destination = {latitude: 37.771707, longitude: -122.4053769};
const GOOGLE_MAPS_APIKEY = 'AIzaSyDMOei5uHcZHiLsh-BYhdYYnkIsjr9PGsI';

//long 35.7212919
//lat 34.1013648

const Maps = () => {
    const [ location , setLocation ] = useState({}) ;

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
                        destination={{latitude :34.098802, longitude: 35.723287 }}
                        apikey={GOOGLE_MAPS_APIKEY}
                        origin={{latitude :34.101935 , longitude: 35.719327 }}
                        strokeWidth={6}
                        strokeColor="red"
                    />
                    <Marker coordinate={{latitude :34.101935 , longitude: 35.719327 }} />
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
