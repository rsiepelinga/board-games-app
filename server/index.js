const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.use('/api/collection', require('./routes/api/collection'));

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.listen(8000, () => console.log('Server Running'));