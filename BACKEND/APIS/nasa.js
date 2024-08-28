const axios = require('axios');

const apiKey = 'slDWi3ZHNbZWkOTaLo6Sebgheuz1JB6uLnL1jM8h';
const endpoint = 'https://api.nasa.gov/planetary/apod';

const getApod = async () => {
  try {
    const response = await axios.get(endpoint, {
      params: {
        api_key: apiKey,
        
      }
    });
    console.log(response.data);
  } catch (error) {
    console.error('Error fetching data from APOD API:', error);
  }
};

getApod();
