require('dotenv').config();
const express = require('express');
const { GoogleGenerativeAI } = require('@google/generative-ai');
const app = express();
const port = process.env.PORT || 3000;
const apiKey = process.env.API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const generationConfig = {
    stopSequences: ["red"],
    maxOutputTokens: 50,
    temperature: 0.9,
    topP: 0.1,
    topk: 16,
};

const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });


app.use(express.json());


app.post('/generate-content', function(req, res) {
    const prompt = req.body.prompt;

    if (!prompt) {
        return res.status(400).json({ error: 'Prompt is required' });
    }

    model.generateContent(prompt, { generationConfig })
        .then(function(result) {
            return result.response.text();
        })
        .then(function(text) {
            res.json({ generatedText: text });
        })
        .catch(function(error) {
            console.error('Error generating content:', error);
            res.status(500).json({ error: 'Internal server error' });
        });
});

// Start the server
app.listen(port, function() {
    console.log(`Server is running on port ${port}`);
});
