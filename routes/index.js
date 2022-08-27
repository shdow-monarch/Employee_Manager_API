const router = require("koa-router")();
const bodyParser = require("koa-bodyparser");
const EmployeeController = require("../controller/employee");
const validateDto = require("../middleware/validationDto");
const isExist = require("../middleware/isExist");
const checkId = require("../middleware/checkObjectId");

router.use(bodyParser());

router.get("/employee", EmployeeController.getAllEmployee);

router.post("/employee", validateDto, EmployeeController.createEmployee);

router.get("/employee/:id", checkId, isExist, EmployeeController.getEmployee);

router.put(
  "/employee/:id",
  checkId,
  isExist,
  EmployeeController.updateEmployee
);

router.delete(
  "/employee/:id",
  checkId,
  isExist,
  EmployeeController.removeEmployee
);

module.exports = router;
