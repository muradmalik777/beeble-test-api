const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const cron = require("node-cron");
const mongoose = require('mongoose');
const app = express();

app.use(cors());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use('/uploads', express.static('uploads'))
mongoose.connect('mongodb://localhost:27017/sharespot', { useNewUrlParser: true });
const db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('Connected to MongoDB');
});

// cron.schedule("15 13 * * *", function () {
//     console.log('cron job running....')
// });

app.use(require('./routes'));
app.listen(8081, () => console.log('Server running on http://localhost:8081/'));