const express = require('express');
const app = express();


app.use('/server/collection', require('./routes/server/collection'));

app.get('/', (req, res) => {
    res.send('Hello World!')
  })

app.listen(8000, () => console.log('Server Running'));

