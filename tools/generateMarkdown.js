"use strict";

function generateTitle (name) {
    return `## ${name} \`<${name}/>\``;
}

function generateDesciption (description) {
    return `\n\`\`\`\n${description} \n\`\`\`\n`;
}

function generatePropType (type) {
    let values;
    if (Array.isArray(type.value)) {
        values = '('
            + type.value.map(function (typeValue) {
                return typeValue.name || typeValue.value;
            }).join(',')
            + ')';
    } else {
        values = type.value;
    }

    return `${type.name}${(values ? values : '')}`;
}
function generateJdoc (description, required, defaultValue) {
    let descr = description.split(/\n/);
    let comment = descr.slice(0, -1).join('\n*');

    return (`/**\n * ${comment} ${required} ${defaultValue}\n */\n${descr.pop()}\n`);
}
function generateProp (propName, prop) {
    const type = prop.type ? generatePropType(prop.type) : '';
    if (!prop.description) {
        if (propName === 'className') {
            prop.description = `Additional class(es) for custom styling.\nString ${propName}`;
        } else if (propName === 'children') {
            prop.description = `Children to pass through the component.\nObject ${propName}`;
        }
    }
    const defaultValue = (prop.defaultValue ? '\n* @default' + prop.defaultValue : '');
    const req = prop.required ? '(required)' : '';
    if (prop.description) {
        let generateJdoc2 = generateJdoc(prop.description, req, defaultValue);
        return generateJdoc2;
    }
    return (`${propName} ${req} ${type}
             ${defaultValue}\n`);
}

function generateProps (props) {
    const title = '### Properties';

    return (
        `${title}\n`
        + '\`\`\`\n'
        + Object.keys(props).sort().map(propName => {
            return generateProp(propName, props[propName]);
        }).join('\n') + '\`\`\`\n'
    );
}

function generateMarkdown (name, reactAPI) {
    const markdownString = generateTitle(name) + '\n'
        + (reactAPI.description ? generateDesciption(reactAPI.description) + '\n' : '\n')
        + generateProps(reactAPI.props);

    return markdownString;
}

module.exports = generateMarkdown;
