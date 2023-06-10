const express = require('express');
const cors = require('cors');



const app = express();
app.use(cors());


app.get('/', (req, res) => {
    const portfolioData = {title: 'Wasif', description: "Hi! I am Wasif."}
    res.json(portfolioData);
})


app.get('/api/portfolio', (req, res) => {
  // Logic to fetch portfolio data and send it back as a response
  const portfolioData = {title: 'Wasif', description: "Hi! I am Wasif."}
  res.json(portfolioData);
});

app.listen(8000, () => {
  console.log('Server is running on port 8000');
});
