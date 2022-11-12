import axios from 'axios';

const API_KEY = 'AIzaSyD2tR4AqjSrgyP8JCVJvMBTzRF35n_M0EU';
const API_URL = `https://vision.googleapis.com/v1/images:annotate?key=${API_KEY}`;

export const recognizeText = async (image) => {
    const body = {
      requests: [
        {
          image: {
            content: image,
          },
          features: [
            {
              type: 'LABEL_DETECTION',
              maxResults: 1,
            },
          ],
        },
      ],
    };
    
    try{
      console.log('HERE1')
      const response = await axios.post(API_URL, body)
      console.log(response.status)
    
      return result.responses[0].labelAnnotations[0].description;
    } catch(e) {
      console.log('HERE!!')
      console.log(e)
    }
  }
