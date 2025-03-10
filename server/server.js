const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDb = require('./config/connectDb');

//config 
dotenv.config();

//database call 
connectDb();

//rest object
const app = express();

//middlewares 
app.use(express.json());
app.use(cors());

//routes
//user routes
app.use('/api/v1/users',require('./routes/userRoute'))

//transaction routes
app.use('/api/v1/transactions', require('./routes/transactionRoutes'));

//port
const PORT = 8080 || process.env.PORT;

//listen server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
});