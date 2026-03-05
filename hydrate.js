const fs = require('fs');
const path = require('path');

function processDir(dir) {
    fs.readdirSync(dir).forEach(file => {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            processDir(fullPath);
        } else {
            if (fs.statSync(fullPath).size === 0) {
                const ext = path.extname(fullPath);
                if (ext === '.tsx') {
                    const name = path.basename(fullPath, '.tsx');
                    fs.writeFileSync(fullPath, `export default function ${name}() { return <div>${name}</div>; }`);
                } else if (ext === '.ts') {
                    fs.writeFileSync(fullPath, 'export {};\n');
                }
            }
        }
    });
}

processDir(path.join(__dirname, 'src'));
console.log('Hydrated empty files.');
