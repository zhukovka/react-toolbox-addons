import React, {Component,PropTypes} from 'react';
import classnames from 'classnames';
import {DROP_ZONE} from '../identifiers';
import {
    CSS_DROP_ZONE_ACTIVE
} from './constants';


class RTDropZone extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDragActive: false
        };
    }
    static propTypes = {
        children : PropTypes.any,
        className : PropTypes.string,
        theme : PropTypes.object,
        handlerOnChange : PropTypes.func,
        activeClass : PropTypes.string,
        defaultClass : PropTypes.string
    };
    static defaultProps = {
        defaultClass : DROP_ZONE
    };
    onDragLeave(e) {
        this.setState({
            isDragActive: false
        });
    }
    onDragOver(e) {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'copy';
        this.setState({
            isDragActive: true
        });
    }
    onChangeHandler(e){
        e.preventDefault();
        this.setState({
            isDragActive : false
        },()=>{
            this.props.handlerOnChange(e);
        })
    }
    render() {
        let { theme, className, children, activeClass, defaultClass } = this.props;
        let { isDragActive } = this.state;
        let classes = classnames(theme[defaultClass],{
            [theme[CSS_DROP_ZONE_ACTIVE]] : isDragActive,
            [activeClass] : activeClass && isDragActive
        },className);

        return (
            <div className={classes}
                 onDragLeave={this.onDragLeave.bind(this)}
                 onDragOver={this.onDragOver.bind(this)}
                 onDrop={this.onChangeHandler.bind(this)}>
                {children}
            </div>
        )
    }
}
export {RTDropZone};
