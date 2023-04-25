const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

const app = express();

// routes
const record = require('./routes/api/record');

// Connect Database
connectDB();

// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));

// app.get('/', (req, res) => res.send('Hello world!'));

// use Routes -> the index page of backend server
app.use('/api/courses', record);

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`)); 