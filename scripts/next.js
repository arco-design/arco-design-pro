const path = require('path');
const fs = require('fs-extra');
const minimist = require('minimist');

const params = minimist(process.argv.slice(2));

const isSimple = params.simple;

const simplePath = path.resolve(
  __dirname,
  '../simple-pro-template/arco-design-pro-next'
);
const templatePath = path.resolve(__dirname, '../arco-design-pro-next');
const projectPath =
  params.projectPath ||
  path.resolve(
    __dirname,
    '../examples/arco-design-pro-next' + `${isSimple ? '-simple' : ''}`
  );

fs.copySync(templatePath, projectPath, {
  filter: (src) =>
    !src.startsWith(path.resolve(templatePath, 'node_modules')) &&
    src.indexOf('.next') === -1,
});

if (isSimple) {
  fs.emptyDirSync(path.resolve(projectPath, 'src'));
  fs.copySync(
    path.resolve(simplePath, 'src'),
    path.resolve(projectPath, 'src')
  );
}

// next cannot be loaded on demand and needs to be imported in full
function addGlobalStyle() {
  const themeStyleCode = "@import '@arco-themes/react-arco-pro/index.less';\n";
  const globalStylePath = path.resolve(projectPath, 'src/style/global.less');

  if (fs.existsSync(globalStylePath)) {
    fs.readFile(globalStylePath, 'utf-8', (err, data) => {
      if (!err) {
        fs.writeFileSync(globalStylePath, themeStyleCode + data);
      }
    });
  }
}

addGlobalStyle();
