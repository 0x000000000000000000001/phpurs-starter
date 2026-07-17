const fs = require('fs');
let code = fs.readFileSync('spago.yaml', 'utf8');

code = code.replace(/- typelevel-prelude\n        - variant/, '- typelevel-prelude\n        - variant\n        - js-bigints\n        - js-date\n        - yoga-tree');

fs.writeFileSync('spago.yaml', code);
