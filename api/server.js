const express = require('express');
const cors = require('cors');

const mongoose = require('mongoose');
const models = require('require-dir');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb+srv://root:root@cluster0-cfdhh.mongodb.net/rsxp?retryWrites=true&w=majority', { 
  useNewUrlParser: true, 
  useUnifiedTopology: true 
});

models('./src/models');

app.use('/api', require('./src/routes'));
app.listen(3333); 