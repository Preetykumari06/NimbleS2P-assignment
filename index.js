const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { mongoose, sequelize } = require('./backend/config/db');
const invoiceRouter = require('./backend/routes/invoiceRoutes');
const port = process.env.PORT || 5050;
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

app.use('/invoices', invoiceRouter);

app.get("/", (req,res) => {
    res.send("Hello, Welcome to the Nimble Backend!")
})

app.listen(port, () => {
  console.log(`Server is Running on http://localhost:${port}`);
});
