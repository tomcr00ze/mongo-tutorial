// First, we imported the dependencies which we need i.e Express and Body Parser.
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

// This code snippet sets the default promise implementation for Mongoose 
// to be the same as the global Promise implementation provided by JavaScript.
// Node.js, the global Promise object is used for asynchronous operations that return a value or throw an error.
// By setting mongoose.Promise to global.Promise, we're essentially instructing Mongoose to use the 
// same promise implementation as the one provided by the JavaScript environment in which it is running.
mongoose.Promise = global.Promise

// This code establishes a connection to a MongoDB database using Mongoose
mongoose.connect(YOUR_MONGODB_URL, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Error...', err);
    process.exit();
});

const app = express()

// Second, Once we imported them we added body-parser middlewares using express’s app.use() method.
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// Thirdly, We defined a simple GET route that returns a message that the server is running.
app.get('/', (req, res) => {
    res.json({"message": "Server is running :D"});
})

// Finally, we defined the port and listen to that port for incoming connections.
let PORT = 8080

require("./routes/routes.js")(app);

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});