import mongoose from 'mongoose'


const rollerDerbyNameSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  }
})

module.exports = mongoose.model("RollerDerbyName", rollerDerbyNameSchema);
// const RollerDerbyName = mongoose.model("RollerDerbyName", rollerDerbyNameSchema);
// module.exports = RollerDerbyName;