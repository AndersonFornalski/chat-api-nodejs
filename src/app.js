require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const helmet = require("helmet");
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');

const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");

const app = express();

mongoose.connect( process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true }, 
    () => {
      console.log("Connected to MongoDB");
    }
  );
app.use("/images", express.static(path.join(__dirname, "public/images")));

app.use(express.json());
app.use(helmet());
app.use(morgan("common"));


app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);


app.listen(3020, function(){
    console.log("server running port 3020");
})
