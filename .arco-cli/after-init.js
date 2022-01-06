const { spawnSync } = require('child_process');

const logInfo = (messages) => {
  messages.forEach((m) => {
    console.log(`\x1B[32m${m}\x1B[0m`);
  });
};

module.exports = ({ projectName }) => {
  const { error } = spawnSync('yarn', ['add', 'arco-design-pro']);

  if (error) {
    throw error;
  }

  logInfo([
    '******************************************************************************',
    '  Read README.md for help information. Execute following command to start',
    `    $ cd ${projectName}`,
    '    $ yarn dev',
    '******************************************************************************',
  ]);
};
