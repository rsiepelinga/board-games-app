const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.use('/api/boardgame', require('./routes/api/boardgame'));
app.use('/api/collection', require('./routes/api/collection'));

app.get('/', (req, res) => {
  res.status(404).send("Oops! That route doesn't exist. Routes that do exist are /api/boardgame/:gameId or /api/collection/:username");
});

app.listen(8000, () => console.log('Server Running'));