import AsyncStorage from "@react-native-async-storage/async-storage";


export const storeTranscript = async ( transcript ) => {
    try {
      const transcripts = await getTranscripts();
      transcripts.push(transcript)
      const response = await AsyncStorage.setItem("transcripts", JSON.stringify(transcripts));
      return response ;
    } catch (error) {
      console.log(error);
    }
};
export const getTranscripts = async () => {
    try {
      const transcripts = await AsyncStorage.getItem("transcripts") || '';
   
      const transcripts_list = transcripts ? JSON.parse(transcripts) : [];
      return transcripts_list;
    } catch (error) {
      console.log(error);
    }
};