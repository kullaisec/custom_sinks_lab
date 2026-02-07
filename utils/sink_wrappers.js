const { appendSuffix, prependPrefix } = require('./helpers');
const { execSync } = require('child_process');

function wrapAndExec(cmd) {

    let step1 = prependPrefix(cmd);


    let step2 = appendSuffix(step1);


    return execSync(step2, { encoding: 'utf8' });
}

module.exports = { wrapAndExec };
