import React from 'react';
import Alert from 'react-s-alert';
import '../../node_modules/react-s-alert/dist/s-alert-default.css';
import '../../node_modules/react-s-alert/dist/s-alert-css-effects/slide.css';
import '../../node_modules/react-s-alert/dist/s-alert-css-effects/scale.css';
import '../../node_modules/react-s-alert/dist/s-alert-css-effects/bouncyflip.css';
import '../../node_modules/react-s-alert/dist/s-alert-css-effects/flip.css';
import '../../node_modules/react-s-alert/dist/s-alert-css-effects/genie.css';
import '../../node_modules/react-s-alert/dist/s-alert-css-effects/jelly.css';
import '../../node_modules/react-s-alert/dist/s-alert-css-effects/stackslide.css';

const Toastr = (props) => {
  return (<Alert {...props}/>);
};
export default Toastr;
