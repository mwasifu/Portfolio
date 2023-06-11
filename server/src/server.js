const express = require('express');
const serverless = require("serverless-http");


const bodyParser = require('body-parser');
const { Configuration, OpenAIApi } = require('openai'); 

const app = express();
// Create a router to handle routes
const router = express.Router();
app.use(bodyParser.json());


app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // Allow requests from any domain
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE'); // Specify allowed HTTP methods
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Specify allowed headers
  next();
});

// OpenAI-API
const config = new Configuration({
  apiKey: "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",
});

const openai = new OpenAIApi(config);

router.post("/api/openai", async (req, res) => {
  const { prompt } = req.body; // Retrieve input text from the request body
  const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{role: "user", content: req.body.me}],
  });
  res.status(200).send(completion.data.choices[0]);
});

// Use the router to handle requests to the `/.netlify/functions/api` path
app.use(`/.netlify/functions/server`, router);

// Export the app and the serverless function
module.exports = app;
module.exports.handler = serverless(app);