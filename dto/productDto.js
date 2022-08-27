const Joi = require("joi");

module.exports = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  dob: Joi.date(),
  gender: Joi.string(),
  address: {
    current: Joi.string(),
    permanent: Joi.string(),
  },
  city: Joi.string(),
  state: Joi.string(),
  zipCode: Joi.string(),
  mobile: Joi.number(),
  email: Joi.string().email(),
  employeeDetails: Joi.object({
    department: Joi.string(),
    position: Joi.string(),
    type: Joi.string(),
    skills: Joi.array(),
    salary: Joi.number(),
    isContract: Joi.boolean(),
    contract: Joi.object({
      startDate: Joi.date().allow(""),
      endDate: Joi.date().allow(""),
    }),
  }),
  bankDetails: {
    bank: Joi.string(),
    branch: Joi.string(),
    accountNumber: Joi.number(),
    ifsc: Joi.string(),
  },
});
