const { Schema, model } = require("mongoose");

const employeeListSchema = new Schema({
  firstName: String,
  lastName: String,
  dob: Date,
  gender: String,
  address: {
    current: String,
    permanent: String,
  },
  city: String,
  state: String,
  zipCode: Number,
  mobile: Number,
  email: String,
  employeeDetails: {
    department: String,
    position: String,
    type: String,
    skills: Array,
    salary: Number,
    isContract: Boolean,
    contract: {
      startDate: String,
      endDate: String,
    },
  },
  bankDetails: {
    bank: String,
    branch: String,
    accountNumber: Number,
    ifsc: String,
  },
});

module.exports = model("employee", employeeListSchema);
