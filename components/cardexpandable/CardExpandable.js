import React, {PropTypes, Component} from 'react';
import {themr} from 'react-css-themr';
import {Card, CardTitle} from 'react-toolbox/lib/card';
import {CardTitleButtons, CardTitlePrimary} from '../card-addons/index';
import theme from './theme.scss';
import {ButtonProps} from '../rtcomponentsprops';
import {CARD_EXPANDABLE} from '../identifiers';

const factory = () => {
    class CardExpandable extends Component {
        static propTypes = {
            children: PropTypes.any,
            primary: PropTypes.bool,
            title: PropTypes.string,
            titleButtons: PropTypes.arrayOf(ButtonProps)
        };

        constructor (props) {
            super(props);
            this.state = {expanded: true};
            this.expandBtn = {
                icon: 'close',
                onClick: () => this.toggleExpanded()
            };
        }


        renderCardTitle (titleButtons = []) {
            const {title, primary} = this.props;
            const buttons = <CardTitleButtons center buttons={[...titleButtons, this.expandBtn]}/>;
            const titleprops = {title, theme};
            if (primary) {
                return (
                    <CardTitlePrimary {...titleprops}>
                        {buttons}
                    </CardTitlePrimary>
                );
            }
            return (
                <CardTitle {...titleprops}>
                    {buttons}
                </CardTitle>
            );
        }

        toggleExpanded () {
            this.setState({expanded: !this.state.expanded});
        }


        renderContent () {
            const {children} = this.props;
            if (this.state.expanded) {
                return (children);
            }
        }

        render () {
            return (
                <Card>
                    {this.renderCardTitle(this.props.titleButtons)}
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
