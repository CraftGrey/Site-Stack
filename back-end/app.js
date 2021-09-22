const express = require ("express");
const mongoose = require ("mongoose");
const {MONGOURI} = require ("./keys");
const app = express();
const PORT = 5000;

//Connection to MongoDB 
mongoose.connect(MONGOURI, {
    useUnifiedTopology: true ,
    useNewUrlParser: true
});

mongoose.connection.on("connected", () => {
    console.log("Connected to MongoDB");
});

mongoose.connection.on("error", (error) => {
    console.log("error: " + error);
});



// models import
require("./models/post");
require("./models/category");
require("./models/comment");

app.use(express.json());

// routes import
app.use(require("./routes/post"));
app.use(require("./routes/category"));
app.use(require("./routes/comment"));

app.listen (PORT, () => {
    console.log("server is started! " + PORT);
});

