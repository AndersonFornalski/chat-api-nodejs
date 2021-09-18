const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');

const app = express();


app.listen(3015, function(){
    console.log("server running port 3020");
})
