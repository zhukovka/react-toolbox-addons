import React, {Component, PropTypes} from 'react';
import classnames from 'classnames';
import {themr} from 'react-css-themr';
import {BOTTOMSHEET} from '../identifiers.js';
import InjectOverlay from 'react-toolbox/lib/overlay/Overlay.js';
import InjectIconButton from 'react-toolbox/lib/button/IconButton.js';
import BottomSheet from '../bottomsheet/BottomSheet';

const factory = (Overlay, IconButton) => {
    class BottomSheetPlus extends BottomSheet {
        constructor (props) {
            super(props);
        }

        renderContent () {
            const {theme, children, className, active} = this.props;
            const _className = classnames(theme.bottomsheet_plus, {
                [theme.active]: active
            }, className);
            return (
                <div data-react-toolbox='bottomsheetplus' className={_className}>
                    {this.renderVisibleContent()}
                    <div className={theme.bottomsheet_plus__item}>
                        {children}
                    </div>
                </div>);
        }
        renderVisibleContent () {
            const {icon} = this.props;
            return (
                <div>{icon ? <IconButton icon={icon} inverse onClick={()=>this.hideBottomsheet()}/> : null}</div>
            );
        }
        render () {
            return (
                <Overlay invisible>
                    {this.renderContent()}
                </Overlay>
            );
        }


    }

    return BottomSheetPlus;
};

const BottomSheetPlus = factory(InjectOverlay, InjectIconButton);
export default themr(BOTTOMSHEET)(BottomSheetPlus);
export {factory as bottomsheetFactory};
export {BottomSheetPlus};
