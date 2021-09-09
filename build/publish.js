
require('./check-versions')();
require('shelljs/global');
var process = require('child_process');
const exec = require('child_process').exec;
var inquirer = require('inquirer');
var chalk = require('chalk');

inquirer.prompt([{
  name: 'conform',
  message: `是否需要重新构建？`,
  type: 'list',
  default: 0,
  choices: [{
    name: '是',
    value: 1
  }, {
    name: '否',
    value: 0
  }]
}, {
  name: 'message',
  message: '版本发布说明',
  type: 'input',
  default: ''
}]).then(function (answers) {
  let build = answers.conform ? 'npm run build &&' : '';
  //  git checkout -b gh-page &&
  var cmd = `${build} rm -rf index.html && rm -rf static && cd dist && mv * ../ && rm -rf ./dist && cd .. && git add . && git commit -m '${answers.message}' && git push origin master`;
  console.log(cmd)
  process.exec(cmd, function(error, stdout, stderr) {
			console.log(chalk.green(`success`));
		});
})
