import React from 'react';
import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';
import 'react-s-alert/dist/s-alert-css-effects/scale.css';
import 'react-s-alert/dist/s-alert-css-effects/bouncyflip.css';
import 'react-s-alert/dist/s-alert-css-effects/flip.css';
import 'react-s-alert/dist/s-alert-css-effects/genie.css';
import 'react-s-alert/dist/s-alert-css-effects/jelly.css';
import 'react-s-alert/dist/s-alert-css-effects/stackslide.css';

const Toastr = (props) => {
  return (<Alert {...props}/>);
};
Toastr.info = Alert.info;
Toastr.warnign = Alert.warning;
Toastr.error = Alert.error;
Toastr.success = Alert.success;
Toastr.close = Alert.close;
Toastr.closeAll = Alert.closeAll;


export default Toastr;
