import mongoose from 'mongoose'


const rollerDerbyNameSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: Number,
    required: true,
  }
})

module.exports = mongoose.model("RollerDerbyName", rollerDerbyNameSchema);