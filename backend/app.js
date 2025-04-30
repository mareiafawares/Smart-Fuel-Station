const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors'); 
const connectDB = require('./config/db'); 
const userRouters = require('./routers/userRouters');
dotenv.config();

connectDB();

const app = express();

app.use(cors({
  origin: 'http://localhost:5501', 
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

app.use(express.json());

app.use('/api', userRouters);

const PORT = process.env.PORT || 5500;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

console.log("Mongo URI:", process.env.MONGO_URI);