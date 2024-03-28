// First, we imported the dependencies which we need i.e Express and Body Parser.
const express = require('express')
const bodyParser = require('body-parser')

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

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});