const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());

app.get('/cnpj/:cnpj', async (req, res) => {
  const { cnpj } = req.params;

  try {
    const response = await axios.get(`https://receitaws.com.br/v1/cnpj/${cnpj}`);
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching company data:", error);
    res.status(500).send("Error fetching company data");
  }
});

app.listen(port, () => {
  console.log(`Backend listening at http://localhost:${port}`);
});
