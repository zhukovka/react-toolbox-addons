import React, {Component, PropTypes} from 'react';
import classnames from 'classnames';
import {themr} from 'react-css-themr';
import {BOTTOMSHEET} from '../identifiers.js';
import InjectOverlay from 'react-toolbox/lib/overlay/Overlay.js';
import InjectIconButton from 'react-toolbox/lib/button/IconButton.js';

const factory = (Overlay, IconButton) => {
    class BottomSheet extends Component {
        static propTypes = {
            active: PropTypes.bool,
            children: PropTypes.node,
            className: PropTypes.string,
            icon: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.element
            ]),
            style: PropTypes.object,
            theme: PropTypes.shape({
                accept: PropTypes.string,
                active: PropTypes.string,
                button: PropTypes.string,
                cancel: PropTypes.string,
                icon: PropTypes.string,
                label: PropTypes.string,
                bottomsheet: PropTypes.string,
                bottomsheet__item: PropTypes.string,
                warning: PropTypes.string
            })
        };

        state = {
            active: this.props.active,
            dragging: false,
            bottom: 0,
            startTop: 0
        };

        componentWillReceiveProps (nextProps) {
            if (nextProps.active !== this.state.active) {
                this.setState({active: nextProps.active, dragging: false, bottom: 0, startTop: 0});
            }
        }

        componentWillUnmount () {

        }

        hideBottomsheet () {
            this.setState({active: false, dragging: false});
        }

        onMouseDown (e, icon) {
            if (!icon) {
                this.setState({dragging: true, startTop: e.clientY});
            }
        }

        onMouseMove (e) {
            if (this.state.dragging) {
                const deltaY = this.state.startTop - e.clientY;
                let active = this.state.active;

                if (deltaY < 0) {
                    if (deltaY < -50) {
                        active = false;
                    }
                    this.setState({bottom: deltaY, active});
                }
            }
        }

        stopDragging () {
            if (this.state.dragging && this.state.active) {
                this.setState({dragging: false, bottom: 0});
            }
        }

        render () {
            const {icon, theme, children} = this.props;
            const {active, bottom} = this.state;
            const className = classnames(theme.bottomsheet, {
                [theme.active]: active
            }, this.props.className);
            return (
                <Overlay invisible onMouseLeave={()=>this.stopDragging()}>
                    <div data-react-toolbox='bottomsheet' className={className} style={{bottom}}
                         onMouseDown={(e)=>this.onMouseDown(e, icon)} onMouseMove={(e)=>this.onMouseMove(e)}
                         onMouseUp={()=>this.stopDragging()}>
                        <div className={theme.bottomsheet__item}>
                            {children}
                        </div>
                        {icon ? <IconButton icon={icon} inverse onClick={()=>this.hideBottomsheet()}/> : null}
                    </div>
                </Overlay>
            );
        }


    }

    return BottomSheet;
};

const BottomSheet = factory(InjectOverlay, InjectIconButton);
export default themr(BOTTOMSHEET)(BottomSheet);
export {factory as bottomsheetFactory};
export {BottomSheet};
