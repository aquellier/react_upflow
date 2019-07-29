const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const fs = require('fs');
const data = fs.readFileSync('./data.json', 'utf8')
const parsedData = JSON.parse(data);

app.listen(port, () => console.log(`Listening on port ${port}`));

// GET route
app.get('/express_backend', (req, res) => {
  res.json({ express: parsedData });
});
