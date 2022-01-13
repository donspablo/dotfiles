'use strict';

const fs = require('fs');
const path = require('path');

module.exports = {
  run
};

async function run() {
  const pkgPath = './package.json';
  const json = JSON.parse(fs.readFileSync(pkgPath, 'utf-8'));

  // @TODO: ensure order
  Object.assign(json, {
    repository: {
      type: 'git',
      url: `git+https://github.com/donPabloNow/${path.basename(process.cwd())}.git`
    },
    author: 'donPabloNow <ewndnine@gmail.com>',
    license: 'MIT'
  });

  fs.writeFileSync(pkgPath, JSON.stringify(json, null, 2));

  fs.appendFileSync('./README.md', [
    '## License',
    '',
    'MIT © [donPabloNow](http://donPabloNow.com)',
    ''
  ].join('\n'));
}


