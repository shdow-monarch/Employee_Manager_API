const Employee = require("../model/employee");
const _ = require("lodash");

module.exports = async (ctx, next) => {
  try {
    const employee = await Employee.findById(ctx.request.params.id);
    if (!_.isEmpty(employee)) {
      await next();
    } else {
      ctx.response.status = 404;
      ctx.body = "Employee not found";
    }
  } catch (error) {
    ctx.response.status = 500;
    ctx.body = error.message;
  }
};
