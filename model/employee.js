const { Schema, model } = require("mongoose");
const { ObjectId } = require("mongodb");

const addressSchema = new Schema(
  {
    current: String,
    permanent: String,
  },
  { _id: false });

const contractSchema = new Schema(
  {
    startDate: String,
    endDate: String,
  },
  { _id: false });

const csvFileSchema = new Schema({
  id: String,
  fileName: String,
  contentType: String,
  base64URL: String,
  size: Number
},
  { _id: false })

const employeeDetailsSchema = new Schema(
  {
    department: String,
    position: String,
    type: String,
    skills: Array,
    salary: Number,
    isContract: Boolean,
    contract: contractSchema,
    csvFile: csvFileSchema
  },
  { _id: false });

const bankDetailsSchema = new Schema(
  {
    bank: String,
    branch: String,
    accountNumber: Number,
    ifsc: String,
  },
  { _id: false });

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
