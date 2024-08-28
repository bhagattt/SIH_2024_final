const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();
const port = 3000;

app.use(express.json());


const analyzeSentiment = async (text) => {
    try {
      const response = await axios.post(
        'https://api.textrazor.com',
        `text=${encodeURIComponent(text)}&extractors=sentiment`,
        {
          headers: {
            'X-TextRazor-Key': process.env.TEXTRAZOR_API_KEY,
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept-Encoding': 'gzip'
          }
        }
      );
      return response.data;
    } catch (error) {
      console.error('Error analyzing sentiment:', error);
      throw error;
    }
  };
  

app.post('/analyze-sentiment', async (req, res) => {
  const { text } = req.body;
  
  if (!text) {
    return res.status(400).json({ error: 'Text is required' });
  }

  try {
    const result = await analyzeSentiment(text);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
});


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
