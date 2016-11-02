import React, {Component, PropTypes} from 'react';
import {Button} from 'react-toolbox/lib/button';
import {
    CLOSE_STATUS,
    OPEN_STATUS,
    MIDDLE_STATUS,
    TOP_ELEMENT,
    BOTTOM_ELEMENT
} from './constants.js';
import classnames from 'classnames';
import ExpandIcon from '../cardexpandable/ExpandIcon.js';

class AsideWrapper extends Component {
    static propTypes = {
      children: PropTypes.arrayOf(PropTypes.element),
      theme: PropTypes.object
    };
    static eq (a, b) {
        return a === b;
    }
    static getNextStatus (currentStatus) {
        let resultStatus = '';
        switch (currentStatus) {
            case OPEN_STATUS :
                resultStatus = CLOSE_STATUS;
                break;
            case CLOSE_STATUS :
                resultStatus = MIDDLE_STATUS;
                break;
            case MIDDLE_STATUS :
                resultStatus = OPEN_STATUS;
                break;
            default :
                resultStatus = MIDDLE_STATUS;
                break;
        }
        return resultStatus;
    }
    static getPreviousStatus (currentStatus){
        let resultStatus = '';
        switch (currentStatus) {
            case OPEN_STATUS :
                resultStatus = MIDDLE_STATUS;
                break;
            case CLOSE_STATUS :
                resultStatus = OPEN_STATUS;
                break;
            case MIDDLE_STATUS :
                resultStatus = CLOSE_STATUS;
                break;
            default :
                resultStatus = MIDDLE_STATUS;
                break;
        }
        return resultStatus;
    }

    constructor (props){
        super(props);
        this.state = {
            next: MIDDLE_STATUS,
            prev: MIDDLE_STATUS
        };
    }
    handleClick (e) {
        this.setState({
            next: AsideWrapper.getNextStatus(this.state.next),
            prev: AsideWrapper.getPreviousStatus(this.state.prev)
        });
    }

    renderChildren () {
        const {theme, children} = this.props;
        return React.Children.map(children, (c, i)=>{
            const topOrBottom = AsideWrapper.eq(i, 0) ? TOP_ELEMENT : BOTTOM_ELEMENT;
            const clsForTop = classnames(theme.top, [theme[this.state.next]]);
            const clsForBottom = classnames(theme.bottom, theme[this.state.prev]);
            const _icon = <ExpandIcon isOpen={AsideWrapper.eq(this.state.next, OPEN_STATUS)}/>;
            return (
                <div key={i + topOrBottom} className={i === 0 ? clsForTop : clsForBottom}>
                    <div className={theme.title}>
                        <h4>{topOrBottom}</h4>
                            <Button icon={_icon} onClick={this.handleClick.bind(this)} />
                    </div>
                    <div className={theme.columnContent}>
                        {c}
                    </div>
                </div>);
        });
    }

    render (){
        const {theme} = this.props;
        return (
            <div className={theme.wrapper}>
                {this.renderChildren()}
            </div>
        );
    }
}

export default AsideWrapper;
