"use strict";
const Fs = require('fs');
const Promise = require('bluebird');
const Path = require('path');

const componentName = process.argv[2];
const componentPath = './spec/components';

function makeJs (name) {
    return `import React, {Component} from 'react';
    import ${name} from '../../components/${name.toLowerCase()}';
    class ${name}Test extends Component {
    render () {
        return;
    }
    }
    export default ${name}Test;
    \n`;
}

new Promise((resolve, reject) => {
    Fs.writeFile(Path.join(componentPath, `/${componentName}.js`), makeJs(componentName), (err) => {
        if (err) return reject(err);
        console.log('It\'s saved!');
        resolve();
    });
});
