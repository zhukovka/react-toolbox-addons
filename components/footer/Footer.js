import React, {Component, PropTypes} from 'react';

class Footer extends Component {
    static propTypes = {
        children: PropTypes.any,
        className: PropTypes.string,
        contentMessage: PropTypes.string,
        contentUrl: PropTypes.string
    };
    constructor (props) {
        super(props);
        this.state = {
            contentMessage: props.contentMessage,
            contentUrl: props.contentUrl
        };
    }
    render () {
        return (
            <footer>
                <a href={this.state.contentUrl}>{this.state.contentMessage}</a>
            </footer>
        );
    }
}

export {Footer};
export default Footer;
