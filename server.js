import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import cors from 'cors'
import RollerDerbyName from './models/rollerDerbyName'


const mongoUrl = process.env.MONGO_URL || "mongodb://localhost/RollerDerby";
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.Promise = Promise

// Defines the port the app will run on. Defaults to 8080, but can be 
// overridden when starting the server. For example:
//
//   PORT=9000 npm start
const port = process.env.PORT || 8089
const app = express()
const listEndpoints = require("express-list-endpoints");

// Add middlewares to enable cors and json body parsing
app.use(cors())
app.use(bodyParser.json())


// Root endpoint
app.get('/', (req, res) => {
  res.send(listEndpoints(app))
})

// All names in database
app.get('/rollerderbynames', async (req, res) => {
  const names = await RollerDerbyName.find()
  res.json(names)
})


app.post("/newname", async (req, res) => {
  try {
    const { firstName, lastName } = req.body;
    const rollerDerbyName = await new RollerDerbyName({ firstName, lastName }).save()
    res.status(201).json({ id: rollerDerbyName._id });
  } catch (err) {
    res
      .status(400)
      .json({ message: "Could not create new name" });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})
