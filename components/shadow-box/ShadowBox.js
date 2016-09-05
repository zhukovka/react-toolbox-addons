import React, {PropTypes} from 'react';
import {SHADOW_BOX} from '../identifiers.js';

const ShadowBox = ({theme, children}) => {
    return (
        <div className={theme[SHADOW_BOX]}>
            {children}
        </div>
    );
};

ShadowBox.propTypes = {
  children: PropTypes.any,
  theme: PropTypes.shape({
    shadowBox: PropTypes.string
  })
};

export default ShadowBox;
