const _ = require("lodash");
const Employee = require("../model/employee");

const EmployeeController = {
  getAllEmployee: async (ctx) => {
    try {
      const employees = await Employee.find();
      ctx.response.status = 200;
      ctx.body = employees;
    } catch (error) {
      ctx.response.status = 500;
      ctx.body = error.message;
    }
  },
  createEmployee: async (ctx) => {
    try {
      const newEmployee = new Employee(ctx.request.body);
      const result = await newEmployee.save();
      ctx.response.status = 201;
      ctx.body = result;
    } catch (error) {
      ctx.response.status = 422;
      ctx.body = error.message;
    }
  },
  getEmployee: async (ctx) => {
    try {
      const employee = await Employee.findById(ctx.request.params.id);
      ctx.response.status = 200;
      ctx.body = employee;
    } catch (error) {
      ctx.response.status = 500;
      ctx.body = error.message;
    }
  },
  updateEmployee: async (ctx) => {
    try {
      const updatedEmployee = await Employee.findByIdAndUpdate(
        ctx.request.params.id,
        ctx.request.body,
        { new: true }
      );
      ctx.response.status = 200;
      ctx.body = await updatedEmployee;
    } catch (error) {
      ctx.response.status = 422;
      ctx.body = error.message;
    }
  },
  removeEmployee: async (ctx) => {
    try {
      await Employee.findByIdAndDelete(ctx.request.params.id);
      ctx.response.status = 200;
      ctx.body = "Employee removed";
    } catch (error) {
      ctx.response.status = 500;
      ctx.body = error.message;
    }
  },
};

module.exports = EmployeeController;
