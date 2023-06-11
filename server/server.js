const express = require('express');
const cors = require('cors');
const axios = require('axios');
const bodyParser = require('body-parser');
const { Configuration, OpenAIApi } = require('openai'); 

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // Allow requests from any domain
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE'); // Specify allowed HTTP methods
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Specify allowed headers
  next();
});

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
