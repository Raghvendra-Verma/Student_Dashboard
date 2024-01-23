const express = require('express');
const colors = require('colors');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const config = require('./config');
const courseRoutes = require('./routes/courseRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.set('strictQuery', true);

mongoose.connect(config.db.url);
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));
mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB'.bgMagenta);
});

// Routes
app.use('/courses', courseRoutes);

// Start the server
const port = config.server.port || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`.bgCyan);
});
