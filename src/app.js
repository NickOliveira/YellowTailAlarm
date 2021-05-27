// create an express app
const express = require("express")
const app = express()
const db = require('./api/queries')

//app.use(express.json())
app.use(express.urlencoded({
  extended: true
}))

// use the express-static middleware
app.use(express.static("./src/public/"))

// define the first route
app.get("/api", function (req, res) {
  console.log(process.env)
  res.send("<h1>Hello World!</h1>")
})

app.post('/register', db.addUser)


// start the server listening for requests
app.listen(process.env.PORT || 3000, 
	() => console.log("Server is running..."));