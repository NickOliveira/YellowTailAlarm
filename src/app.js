// create an express app
const express = require("express")
const app = express()

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

app.post('/register', function (req, res) {
  console.log("Post recieved:")
  console.log(req.body)
  console.log(process.env.DATABASE_URL)
  
  res.redirect('/')
})


// start the server listening for requests
app.listen(process.env.PORT || 3000, 
	() => console.log("Server is running..."));