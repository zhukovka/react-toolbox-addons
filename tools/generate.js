"use strict";
const Fs = require('fs');
const Promise = require('bluebird');
const Path = require('path');

const componentName = process.argv[2];
const componentPath = Path.join('./components', componentName.toLowerCase());
const identifiers = './components/identifiers.js';
const exportList = './components/index.js';
function makeJs (name) {
    return `import React, {PropTypes} from 'react';
    import classnames from 'classnames';
    import {themr} from 'react-css-themr';
    import {${name.toUpperCase()}} from '../identifiers';
    const ${name} = () => {return ();};
    ${name}.propTypes = {};
    const factory = () => ${name};
    export default themr(${name.toUpperCase()})(${name});
    export {factory as ${name}Factory};
    export {${name}};\n`;
}
function makeIndexJs (name) {
    return `import {themr} from 'react-css-themr';
    import {${name.toUpperCase()}} from '../identifiers';
    import theme from './theme.scss';
    import {${name}Factory} from './${name}';
    const ${name} = ${name}Factory();
    const Themed${name} = themr(${name.toUpperCase()}, theme)(${name});
    export default Themed${name};\n`;
}
function makeScss (name) {
    return `.${name.toLowerCase()}{}`;
}
function addIdentifier (data, name) {
    const newExport = `export const ${name.toUpperCase()} = '${name}';`;
    let identifiers = data.trim().split('\n');
    identifiers.push(newExport);
    return identifiers.sort().join('\n') + '\n';
}
function addExport (data, componentName) {
    const newExport = `export ${componentName} from './${componentName.toLowerCase()}';`;
    let exports = data.trim().split('\n');
    exports.push(newExport);
    return exports.sort().join('\n') + '\n';
}
new Promise((resolve, reject) => {
    Fs.mkdir(componentPath, (err) => {
        if (err) {
            return reject(err);
        }

        return resolve();
    });
}).then(()=> {
    Fs.readFile(identifiers, 'utf8', (err, data) => {
        if (err) {
            return Promise.reject(err);
        }
        Fs.writeFile(identifiers, addIdentifier(data, componentName), ()=> {
            if (err) return Promise.reject(err);
            console.log('It\'s saved!');
            Promise.resolve();
        })
    });
}).then(()=> {
    Fs.readFile(exportList, 'utf8', (err, data) => {
        if (err) {
            return Promise.reject(err);
        }
        Fs.writeFile(exportList, addExport(data, componentName), ()=> {
            if (err) return Promise.reject(err);
            console.log('It\'s saved!');
            Promise.resolve();
        })
    });
}).then(()=> {
    Fs.writeFile(Path.join(componentPath, `/${componentName}.js`), makeJs(componentName), (err) => {
        if (err) return Promise.reject(err);
        console.log('It\'s saved!');
        Promise.resolve();
    });
}).then(()=> {
    Fs.writeFile(Path.join(componentPath, `/index.js`), makeIndexJs(componentName), (err) => {
        if (err) return Promise.reject(err);
        console.log('It\'s saved!');
        Promise.resolve();
    });
}).then(()=> {
    Fs.writeFile(Path.join(componentPath, `/theme.scss`), makeScss(componentName), (err) => {
        if (err) return Promise.reject(err);
        console.log('It\'s saved!');
        Promise.resolve();
    });
});
