import React, { useEffect , useState } from "react" ;
import { View , TouchableOpacity , StyleSheet, Text } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import QrCodeComponent from "../components/QrCodeComponent";
import QrModal from "../components/QrModal";
import Background from "../components/Background";

const storeTranscripts = async ( value ) => {
    try {
      const response = await AsyncStorage.setItem("transcripts", JSON.stringify(value));
      return response ;
    } catch (error) {
      console.log(error);
    }
};
const getTranscripts = async () => {
    try {
      const transcripts = await AsyncStorage.getItem("transcripts");
      const transcripts_list = JSON.parse(transcripts);
      return transcripts_list;
    } catch (error) {
      console.log(error);
    }
};

const Transcripts = () => {
    const [ transcripts , setTranscripts ] = useState([]);
    const [ openModal , setOpenModal ] = useState(false);
    const [ modalTranscript , setModalTranscript ] = useState("");
    const openTheModal = (transcript) => {
        setOpenModal(true)
        setModalTranscript(transcript)
    }
    const closeTheModal = () => {
        setOpenModal(false);
        setModalTranscript("");
    }
    useEffect(() => {
        const result = getTranscripts()
        if (result._transcripts === undefined ) {
            console.log("nulll")
            const response = storeTranscripts(["Panadol (200mg)", "Acetaminophen (syrup)", "Amitriptyline", "Votamere"])
        }
    },[])

    useEffect(() => {
        (async () => {
            const response = await getTranscripts();
            console.log('RESPONSE',response);
            setTranscripts(response)
        })()
    },[transcripts[-1]])

    console.log(openModal, modalTranscript);
    return (
        <Background style={styles.container} >
            { transcripts.map((text, index) =>
                <TouchableOpacity key={index} style={{...styles.component}} onPress={() => openTheModal(text)}>
                    <View style={styles.itemLeft}>
                        <View style={styles.blueSquare}></View>
                        <Text>
                            {text}
                        </Text>
                    </View> 
                    <View>
                        <QrCodeComponent content={text} size={40} />
                    </View>         
                </TouchableOpacity>
            )}
            <QrModal open={openModal} modalText={modalTranscript} closeModal={() => closeTheModal()} /> 
        </Background>
    )
};

const styles = StyleSheet.create({
    container: {
      display:"flex",
      flexDirection: "column",
      alignItems: "center",
      paddingVertical: 80,
    },
    component : {
        backgroundColor: "white",
        width: "95%",
        display : "flex",   
        padding: 20,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        marginTop: 20,
        shadowColor: "#000",
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