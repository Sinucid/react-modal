const cors = require('cors');
const express = require('express');
const app = express();

app.use(cors());

app.get('/content', (req, res) => {
  res.send({ content: [{
    id: '1',
    title: 'First Content Item',
    description: 'This is the first content item.'
  }, {
    id: '2',
    title: 'Second Content Item',
    description: 'This is the second content item.'
  }, {
    id: '3',
    title: 'Third Content Item',
    description: 'This is the third content item.'
  }]});
});

app.listen(3001, () => {
  console.log('Application listening on port 3001!');
});