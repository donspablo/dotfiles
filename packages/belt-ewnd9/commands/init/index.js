'use strict';

const fs = require('fs');
const execa = require('execa');
const makeDir = require('make-dir');
const gitUrlParse = require('git-url-parse');
const qs = require('qs');
const ncp = require('ncp');
const prompts = require('prompts');
const kebabCase = require('lodash/kebabCase');
const snakeCase = require('lodash/snakeCase');
const camelCase = require('lodash/camelCase');
const upperFirst = require('lodash/camelCase');
const upperCase = require('lodash/upperCase');

module.exports = {
  run
};

async function run({ argv }) {
  const ctx = getContext(argv);

  if (argv.i || argv.interactive) {
    const dirs = fs.readdirSync(`${ctx.repoDir}/templates`);

    const overrides = await prompts([{
      type: 'text',
      name: 'name',
      message: 'name of a project'
    }, {
      type: 'select',
      name: 'templatePath',
      message: 'pick a template',
      choices: dirs.map(dir => ({title: dir, value: `templates/${dir}`})),
      initial: 1
    }]);

    Object.assign(ctx, overrides);
  }

  if (!fs.existsSync(ctx.repoDir)) {
    await makeDir(ctx.repoDir);
    await execa('git', ['clone', ctx.repoUrl.split('#')[0], ctx.repoDir], {
      stdio: 'inherit'
    });
  } else {
    await execa('git', ['checkout', ctx.branch], { cwd: ctx.repoDir });
  }

  if (argv.sync) {
    await execa('git', ['pull', 'origin', ctx.branch], { cwd: ctx.repoDir });
  }

  const fullTemplatePath = `${ctx.repoDir}/${ctx.templatePath}`;
  const ignore = ['.gitignore', 'yarn.lock'];

  if (!fs.existsSync(fullTemplatePath)) {
    throw new Error(`"${fullTemplatePath}" doesn't exist`);
  }

  await new Promise((resolve, reject) => {
    ncp(
      fullTemplatePath,
      process.cwd(),
      {
        transform(read, write) {
          if (ignore.some(ignoredFile => read.path.endsWith(ignoredFile))) {
            read.pipe(write);
            return;
          }

          fs.readFile(read.path, 'utf8', (err, data) => {
            if (err) {
              throw err;
            }

            const result = data
              .replace(new RegExp('generator-template', 'g'), kebabCase(ctx.name))
              .replace(new RegExp('generator_template', 'g'), snakeCase(ctx.name))
              .replace(new RegExp('generatorTemplate', 'g'), camelCase(ctx.name))
              .replace(
                new RegExp('GeneratorTemplate', 'g'),
                upperFirst(camelCase(ctx.name))
              )
              .replace(
                new RegExp('GENERATOR_TEMPLATE', 'g'),
                upperCase(snakeCase(ctx.name))
              );

            fs.writeFile(write.path, result, 'utf8', err => {
              if (err) {
                throw err;
              }

              return null;
            });
          });
        }
      },
      err => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      }
    );
  });
}

function getContext({name, from: repoUrl, template: templatePath}) {
  const ctx = {repoUrl};

  if (repoUrl) {
    Object.assign(ctx, gitUrlParse(repoUrl));
    const { branch, path: templatePath } = qs.parse(ctx.search);

    ctx.branch = branch;
    ctx.templatePath = templatePath;
  } else {
    const repoUrl = 'https://github.com/donPabloNow/templates.git?path=node-express&branch=master';
    Object.assign(ctx, gitUrlParse(repoUrl));

    ctx.branch = 'master';
    ctx.templatePath = templatePath || 'node';
  }

  ctx.repoDir = `${process.env.HOME}/.cache/belt-donPabloNow-init/${[
    ctx.source,
    ctx.full_name
  ]
    .join('-')
    .replace(/\W+/g, '-')}`;

  ctx.name = name || ctx.templatePath.split('/').pop();
  return ctx;
}
