import axios from "axios";

const CLOUD_VISION_API_KEY = "API_KEY";
const API_URL = `https://vision.googleapis.com/v1/images:annotate?key=${CLOUD_VISION_API_KEY}`;

export const recognizeText = async (image) => {
  const body = {
    requests: [
      {
        image: {
          content: image,
        },
        features: [
          {
            type: "DOCUMENT_TEXT_DETECTION",
            maxResults: 1,
          },
        ],
      },
    ],
  };

  try {
    const response = await axios.post(API_URL, body);
    return response.data.responses[0].textAnnotations[0].description;
  } catch (e) {
    console.log("Request error");
    console.log(e);
  }
};
