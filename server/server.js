const express = require('express');
const cors = require('cors');
const axios = require('axios');
const bodyParser = require('body-parser');
const { Configuration, OpenAIApi } = require('openai'); 

const app = express();
app.use(cors());
app.use(bodyParser.json());



app.get('/', (req, res) => {
    const portfolioData = {title: 'Wasif', description: "Hi! I am Wasif."}
    res.json(portfolioData);
})


app.get('/api/portfolio', (req, res) => {
  // Logic to fetch portfolio data and send it back as a response
  const portfolioData = {title: 'Wasif', description: "Hi! I am Wasif."}
  res.json(portfolioData);
});

// OpenAI-API
const config = new Configuration({
    apiKey: "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",
});

const openai = new OpenAIApi(config);

app.post("/api/openai", async (req, res) => {

    const { prompt } = req.body; // Retrieve input text from the request body
    const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{role: "user", content: req.body.me}],
      });

    res.send(completion.data.choices[0]);
});
  

app.listen(8000, () => {
  console.log('Server is running on port 8000');
});
