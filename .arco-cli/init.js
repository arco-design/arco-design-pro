const { spawnSync } = require('child_process');

const FRAMEWORK_LIST = ['cra', 'next', 'vite'];

const isWindows = process.platform === 'win32';
const cmd = isWindows ? 'npm.cmd' : 'npm';

module.exports = function ({ framework, projectPath, simple}) {
  if (FRAMEWORK_LIST.indexOf(framework) > -1) {
    const { stderr, error } = spawnSync(cmd, [
      'run',
      `gen:${framework}`,
      `--projectPath=${projectPath}`,
      simple ? '--simple' : undefined
    ]);

    if (error) {
      throw error;
    }

    if (stderr && stderr.toString()) {
      throw new Error(`Failed to copy project content.\n${stderr.toString()}`);
    }
  }
};
