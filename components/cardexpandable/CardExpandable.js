import React, {PropTypes, Component, Children} from 'react';
import {themr} from 'react-css-themr';
import {Card, CardTitle} from 'react-toolbox/lib/card';
import {CardTitleButtons, CardTitlePrimary} from '../card-addons/index';
import theme from './theme.scss';
import {ButtonProps} from '../rtcomponentsprops';
import {CARD_EXPANDABLE} from '../identifiers';
import classnames from 'classnames';
import ExpandIcon from './ExpandIcon.js';

const factory = () => {
    class CardExpandable extends Component {
        static propTypes = {
            absolute: PropTypes.bool,
            children: PropTypes.any,
            primary: PropTypes.bool,
            style: PropTypes.object,
            title: PropTypes.string,
            titleButtons: PropTypes.arrayOf(ButtonProps)
        };

        constructor (props) {
            super(props);
            this.state = {expanded: true};
        }

        scrollDown (content) {
            if (content && this.props.absolute) {
                content.scrollTop = content.scrollHeight;
            }
        }

        renderCardTitle (titleButtons = []) {
            const {title, primary} = this.props;
            const expandButton = {
                icon: (<ExpandIcon isOpen={this.state.expanded}/>),
                onClick: (e)=>this.toggleExpanded(this)
            };
            const buttons = <CardTitleButtons center buttons={[...titleButtons, expandButton]}/>;
            const titleprops = {title, theme, className: theme.cardexpandable_title};
            if (primary) {
                return (
                    <CardTitlePrimary {...titleprops} theme={theme}>
                        {buttons}
                    </CardTitlePrimary>
                );
            }
            return (
                <CardTitle {...titleprops} theme={theme}>
                    {buttons}
                </CardTitle>
            );
        }

        toggleExpanded () {
            this.setState({expanded: !this.state.expanded});
        }


        renderContent () {
            const children = Children.toArray(this.props.children);
            return (
                <div className={classnames({[theme.collapse]: !this.state.expanded})}>
                    <div className={theme.content} ref={this.scrollDown.bind(this)}>
                        {children[0]}
                    </div>
                    {children.slice(1)}
                </div>);
        }

        render () {
            const {absolute, titleButtons, style} = this.props;
            const classes = classnames({[theme.absolute]: absolute});
            return (
                <Card className={classes} style={style}>
                    {this.renderCardTitle(titleButtons)}
                    {this.renderContent()}
                </Card>
            );
        }
    }

    return CardExpandable;
};
const CardExpandable = factory();
export default themr(CARD_EXPANDABLE)(CardExpandable);
export {factory as cardExpandableFactory};
export {CardExpandable};
