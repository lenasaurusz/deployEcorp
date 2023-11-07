const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const PORT = 1010
app.use(cors());
app.use(express.json());
app.listen(PORT, () => {
    console.log(`Server runnig at port ${PORT}`);
});
app.use('/eco', express.static(__dirname + '/front-end'));

// app.get('/eco', function(req, res) {
//     res.sendFile(path.join(__dirname + '/front-end/index.html'));
//   });
  app.get('/eco/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'front-end', 'index.html'));
});
