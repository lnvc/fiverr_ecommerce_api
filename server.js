const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRouter = require('./routes/user.route');

const app = express();
const port = 5000;

app.use(express.json());
// development mode: allow all, whitelist address for production
app.use(cors());
app.use('/users', userRouter);

const uri = "mongodb+srv://laira:WyLVcFpJouaBNVAJ@testbotdb.udgsq.mongodb.net/ecommerce?retryWrites=true;"

mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
