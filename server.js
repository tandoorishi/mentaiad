const express = require('express');
const bodyParser = require('body-parser');
const scriptRoutes = require('./routes/scriptRoutes');
const app = express();

app.use(bodyParser.json());
app.use('/api/scripts', scriptRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
