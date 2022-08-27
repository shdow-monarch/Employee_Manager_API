const koa = require("koa");
const cors = require("cors");
const router = require("./routes");
require("./config");

const app = new koa();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(router.routes()).use(router.allowedMethods());

app.listen(PORT, () => console.log("Server started"));
