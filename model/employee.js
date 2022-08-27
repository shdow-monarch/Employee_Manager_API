const { Schema, model } = require("mongoose");

const addressSchema = new Schema(
  {
    current: String,
    permanent: String,
  },
  { _id: false }
);

const contractSchema = new Schema(
  {
    startDate: String,
    endDate: String,
  },
  { _id: false }
);

const employeeDetailsSchema = new Schema(
  {
    department: String,
    position: String,
    type: String,
    skills: Array,
    salary: Number,
    isContract: Boolean,
    contract: contractSchema,
  },
  { _id: false }
);

const bankDetailsSchema = new Schema(
  {
    bank: String,
    branch: String,
    accountNumber: Number,
    ifsc: String,
  },
  { _id: false }
);

const employeeListSchema = new Schema({
  firstName: String,
  lastName: String,
  dob: String,
  gender: String,
  address: addressSchema,
  city: String,
  state: String,
  zipCode: String,
  mobile: Number,
  email: String,
  employeeDetails: employeeDetailsSchema,
  bankDetails: bankDetailsSchema,
});

module.exports = model("employee", employeeListSchema);
