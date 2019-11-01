const fs = require('fs');
const path = require('path')

let baseDir = process.cwd();

console.log('baseDir  = ', baseDir);

let typesFolder = path.resolve(baseDir, `../../@types`);

let targetPath = path.resolve(baseDir, `../../@types/jweixin`);

if (!fs.existsSync(typesFolder)) {
    fs.mkdirSync(typesFolder);
}

if (!fs.existsSync(targetPath)) {
    fs.mkdirSync(targetPath);
}

let from = path.resolve(baseDir, `jweixin.d.ts`);
let to = path.resolve(targetPath, `index.d.ts`);

console.log(`Copying \`${from}\` to \`${to}\` to make it work`);
fs.copyFileSync(from, to);
