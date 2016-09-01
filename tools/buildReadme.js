import Fs from 'fs';
import GenerateMarkdown from './generateMarkdown';
import Glob from 'glob';
import Path from 'path';
import {parse as ParseComponent} from 'react-docgen';
import Promise from 'bluebird';

const getComponentName = (filepath) => {
    let name = Path.basename(filepath);
    let ext;
    while ((ext = Path.extname(name))) {
        name = name.substring(0, name.length - ext.length);
    }
    return name;
};

const componentGlob = Path.join(process.argv[2], '/*.js');

new Promise((resolve, reject) => {
    Glob(componentGlob, (err, files) => {
        if (err) {
            return reject(err);
        }

        return resolve(files);
    });
}).then(filePaths => {
    const files = {};

    filePaths.forEach(path => {
        files[getComponentName(path)] = new Promise((resolveRead, rejectRead) => {
            Fs.readFile(path, 'utf8', (err, data) => {
                if (err) {
                    return rejectRead(err);
                }

                return resolveRead(data);
            });
        });
    });

    return Promise.props(files);
}).then(fulfillments => {
    let _fulfillments = {};
    for (const componentName in fulfillments) {
        if (componentName != "index") {
            _fulfillments[componentName] = ParseComponent(fulfillments[componentName]);
        }
    }

    return _fulfillments;
}).then(fulfillments => {
    let markdown = '';

    for (const componentName in fulfillments) {
        const reactAPI = fulfillments[componentName];
        markdown = markdown
            .concat(GenerateMarkdown(componentName, reactAPI))
            .concat('\n\n------------------------------------------------------------------\n\n');
    }

    return markdown;
}).then(markdown => {
    return new Promise((resolve, reject) => {

        Fs.open(Path.join(process.argv[2], '/readme.md'), 'w', (err, fd) => {
            if (err) {
                return reject(err);
            }

            const introLines = [];

            const newMarkdown = introLines.join('\n').concat(markdown);

            return resolve(newMarkdown);
        });

    });
}).then(newMarkdown => {
    Fs.writeFileSync(Path.join(process.argv[2], '/readme.md'), newMarkdown);
});
