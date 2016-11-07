import React, {PropTypes, Component} from 'react';
import classnames from 'classnames';

class ChatContent extends Component{
    constructor (props) {
        super(props);
    }
    scrollDown (content) {
        if (content) {
            content.scrollTop = content.scrollHeight;
        }
    }
    render () {
        const {theme, children, className} = this.props;
        return (
            <div className={classnames(theme.chatContent, className)}>
                <div className={theme.content} ref={this.scrollDown.bind(this)}>
                    {children[0]}
                </div>
                {children.slice(1)}
            </div>);
    }
}

ChatContent.propTypes = {
    children: PropTypes.arrayOf(PropTypes.element),
    className: PropTypes.string,
    theme: PropTypes.object
};

export default ChatContent;
