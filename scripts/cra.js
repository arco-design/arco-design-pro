const path = require('path');
const fs = require('fs-extra');
const minimist = require('minimist');

const params = minimist(process.argv.slice(2));

const isSimple = params.simple;
const nextTemplatePath = path.resolve(
  __dirname,
  `..${isSimple ? '/simple-pro-template' : ''}/arco-design-pro-next`
);
const simplePath = path.resolve(
  __dirname,
  '../simple-pro-template/arco-design-pro-cra'
);
const templatePath = path.resolve(__dirname, '../arco-design-pro-cra');
const projectPath =
  params.projectPath ||
  path.resolve(
    __dirname,
    '../examples/arco-design-pro-cra' + `${isSimple ? '-simple' : ''}`
  );

function copyTemplateFile() {
  fs.copySync(templatePath, projectPath, {
    filter: (src) =>
      !src.startsWith(path.resolve(templatePath, 'node_modules')),
  });

  if (isSimple) {
    fs.emptyDirSync(path.resolve(projectPath, 'src'));
    fs.copySync(
      path.resolve(simplePath, 'src'),
      path.resolve(projectPath, 'src')
    );
  }
}

function copyCommonFileFromNext() {
  const gitignorePath = path.resolve(
    __dirname,
    '../arco-design-pro-next/gitignore'
  );
  const gitignorePath2 = path.resolve(
    __dirname,
    '../arco-design-pro-next/.gitignore'
  );

  const maps = {
    'src/components': 'src/components',
    'src/locale': 'src/locale',
    'src/mock': 'src/mock',
    'src/pages': {
      dest: 'src/pages',
      filter: (src) => {
        const ignores = [
          path.resolve(nextTemplatePath, 'src/pages/index.tsx'),
          path.resolve(nextTemplatePath, 'src/pages/_app.tsx'),
          path.resolve(nextTemplatePath, 'src/pages/layout.tsx'),
        ];
        return ignores.indexOf(src) === -1;
      },
    },
    'src/public/assets': 'src/assets',
    'src/store': 'src/store',
    'src/style': 'src/style',
    'src/utils': 'src/utils',
    'src/settings.json': 'src/settings.json',
    'src/routes.ts': 'src/routes.ts',
    'src/declaration.d.ts': 'src/declaration.d.ts',
    'src/context.tsx': 'src/context.tsx',
    '.eslintrc': '.eslintrc',
    '.eslintignore': '.eslintignore',
    '.stylelintrc': '.stylelintrc',
    '.stylelintignore': '.stylelintignore',
    '.prettierrc': '.prettierrc',
  };

  Object.keys(maps).forEach((src) => {
    let templatePath = path.resolve(nextTemplatePath, src);
    if (!fs.existsSync(templatePath)) {
      templatePath = path.resolve(__dirname, '../arco-design-pro-next', src);
    }

    if (typeof maps[src] === 'string') {
      fs.copySync(templatePath, path.resolve(projectPath, maps[src]));
    }
    if (typeof maps[src] === 'object') {
      fs.copySync(templatePath, path.resolve(projectPath, maps[src].dest), {
        filter: maps[src].filter,
      });
    }
    if (fs.existsSync(gitignorePath)) {
      fs.copySync(gitignorePath, path.resolve(projectPath, '.gitignore'));
    } else if (fs.existsSync(gitignorePath2)) {
      fs.copySync(gitignorePath2, path.resolve(projectPath, '.gitignore'));
    }
  });
}

function removeGlobalFirstLine() {
  const globalLessPath = path.resolve(projectPath, 'src/style/global.less');
  if (fs.existsSync(globalLessPath)) {
    const data = fs.readFileSync(globalLessPath).toString();
    const lessArr = data.split('\n');
    lessArr.shift();
    fs.writeFileSync(globalLessPath, lessArr.join('\n'));
  }
}

copyTemplateFile();
copyCommonFileFromNext();
removeGlobalFirstLine();
