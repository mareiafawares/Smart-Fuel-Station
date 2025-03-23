const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db'); 
const userRouters = require('./routers/userRouters');
dotenv.config();


connectDB();


const app = express();


app.use(express.json());


app.use('/api', userRouters);


const PORT = process.env.PORT || 5050;
app.listen(PORT, () => console.log(` Server is running on port ${PORT}`));
console.log("Mongo URI:", process.env.MONGO_URI);