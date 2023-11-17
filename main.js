const path = require('path');
const express = require('express');
const app = express();
const PORT = 4241
app.listen(PORT, () => {
  console.log(`Server runnig at port ${PORT}`);
});
app.use('/', express.static(__dirname + '/front-end'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/front-end/index.html'));
});
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'front-end', 'index.html'));
});
