const path = require("path");
const fs = require("fs-extra");

fs.copySync(
  path.resolve(__dirname, "../arco-design-pro-next"),
  path.resolve(__dirname, "../examples/arco-design-pro-next"),
  {
    filter: (src) =>
      src.indexOf("node_modules") === -1 && src.indexOf(".next") === -1,
  }
);
