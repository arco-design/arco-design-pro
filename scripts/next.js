const path = require("path");
const fs = require("fs-extra");

const templatePath =  path.resolve(__dirname, "../arco-design-pro-next");
const projectPath = process.argv[2] || path.resolve(__dirname, "../examples/arco-design-pro-next");

fs.copySync(
  templatePath,
  projectPath,
  {
    filter: (src) =>
      !src.startsWith(path.resolve(templatePath, "node_modules")) && src.indexOf(".next") === -1,
  }
);
