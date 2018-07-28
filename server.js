const express = require('express')
const mongoose = require('mongoose')
const app = express()
const bodyParser = require('body-parser')
var cors = require('cors')

const employee = require('./routes/api/employee')

// DB Config
const db = require('./config/keys').mongoURI


app.use(cors())
// Body Parser middleware
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// Connect to MongoDB
mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err))


// Create link to Angular build directory
var distDir = __dirname + "/client/dist/";
app.use(express.static(distDir));



// Use Routes
app.use('/api/employees', employee)
const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Server running on port ${port}`) )