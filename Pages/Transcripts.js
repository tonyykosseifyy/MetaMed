import React, { useCallback, useEffect , useState } from "react" ;
import { View , TouchableOpacity , StyleSheet, Text, ActivityIndicator, ScrollView } from "react-native";
import { storeTranscripts, getTranscripts } from "../database/transcripts";
import QrCodeComponent from "../components/QrCodeComponent";
import QrModal from "../components/QrModal";
import Background from "../components/Background";
import AppText from "../components/AppText";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import AppActivityIndicator from "../components/AppActivityIndicator";


const Transcripts = () => {
    const [ transcripts , setTranscripts ] = useState(null);
    const navigation = useNavigation();

    const loadTranscript = async () => {
        const result = await getTranscripts()
        
        if (result ) {
            setTranscripts(result)
            

          } else {
            setTranscripts([{meds: ["Panadol (200mg)"], date: new Date()},{meds: ["Panadol (200mg)"], date: new Date()}, {meds: ["Panadol (200mg)"], date: new Date()}, {meds: ["Panadol (200mg)"], date: new Date()}])
          }
    }

    useFocusEffect(() => {
        loadTranscript()
    })



    return (
        <Background title='Transcripts' style={!transcripts ? styles.container : {}}>
            {transcripts === null? 
            <AppActivityIndicator/> : 
            transcripts.length == 0 ? <AppText>No transcripts added yet.</AppText>
            : <ScrollView>
                {
                transcripts.reverse().map((transcript, index) =>
           
                {
                    const date = new Date(transcript.date)
                    return <TouchableOpacity 
                    key={index} 
                    style={styles.component}
                     onPress={() => navigation.navigate('QrCode',{title: date.toLocaleDateString(), meds: transcript.meds} )}>
                        <View style={styles.itemLeft}>
                            <View style={styles.blueSquare}></View>
                            <AppText>
                                { date.toLocaleString()}
                            </AppText>
                        </View>
                        <View>
                            <QrCodeComponent content={JSON.stringify(transcript.meds)} size={40} />
                        </View>
                    </TouchableOpacity>;
                }
            ) 
       }
            </ScrollView>
            
            }
        </Background>
    )
};

const styles = StyleSheet.create({
    container: {
      display:"flex",
      justifyContent: 'center',
      alignItems: 'center'
    },
    component : {
        backgroundColor: "white",
        width: "100%",
        display : "flex",   
        padding: 20,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        marginTop: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.13,
        shadowRadius: 2.62,
        elevation: 2,
    },
    blueSquare : {
        width: 24 ,
        height: 24 , 
        backgroundColor: "#29AFFB",
        opacity: 0.4,
        marginRight: 10,
        borderRadius: 5
    },
    itemLeft: {
        display: "flex",
        flexDirection:"row"
    }
});

export default Transcripts ;