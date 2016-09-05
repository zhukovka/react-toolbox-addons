import React, {PropTypes, Component} from 'react';

import {
    SLIDER_CONTAINER,
    SLIDER_BUTTON_NEXT,
    SLIDER_BUTTON_PREV,
    SLIDER_CONTROLS
} from './constants';

class Slider extends Component {

    render (){
        const {theme} = this.props;
        return (
            <div className={theme[SLIDER_CONTAINER]}>

                <div className={theme[SLIDER_CONTROLS]}>
                    {this.renderControlPrev(this.handleControls.bind(this, SLIDER_BUTTON_PREV))}
                    {this.renderControlNext(this.handleControls.bind(this, SLIDER_BUTTON_NEXT))}
                </div>
            </div>
        );
    }
}

Slider.propTypes = {
    children: PropTypes.any,
    count: PropTypes.number,
    theme: PropTypes.object
};

export {Slider};
