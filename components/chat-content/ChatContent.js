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
        const {theme, children} = this.props;
        return (
            <div className={theme.chatContent}>
                <div className={theme.content} ref={this.scrollDown.bind(this)}>
                    {children[0]}
                </div>
                {children.slice(1)}
            </div>);
    }
}

ChatContent.propTypes = {
    children: PropTypes.arrayOf(PropTypes.element),
    theme: PropTypes.object
};

export default ChatContent;
