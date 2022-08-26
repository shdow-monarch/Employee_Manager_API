const router = require("koa-router")();
const bodyParser = require("koa-bodyparser");
const ProductController = require("../controller/product");
const validateDto = require("../middleware/validationDto");
const isExist = require("../middleware/isExist");
const checkId = require("../middleware/checkObjectId");

router.use(bodyParser());

router.get("/employee", ProductController.getAllProduct);

router.post("/employee", validateDto, ProductController.createProduct);

router.get("/employee/:id", checkId, isExist, ProductController.getProduct);

router.put("/employee/:id", checkId, isExist, ProductController.updateProduct);

router.delete(
  "/employee/:id",
  checkId,
  isExist,
  ProductController.removeProduct
);

module.exports = router;
