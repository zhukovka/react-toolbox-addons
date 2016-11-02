import React, {PropTypes} from 'react';

const ChatContent = () => {
    return (
        <div className={classnames(theme.collapsable, {[theme.collapse]: this.state.expanded === 0})}>
            <div className={theme.content} ref={this.scrollDown.bind(this)}>
                {children[0]}
            </div>
            {children.slice(1)}
        </div>);
};

export default ChatContent;
