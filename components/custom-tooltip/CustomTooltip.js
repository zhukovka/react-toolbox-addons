import React, {PropTypes, Component} from 'react';
import classnames from 'classnames';

class CustomTooltip extends Component {
    constructor (props){
        super(props);
        this.state = {
            showTooltip: true
        };
    }

    renderTooltip (bool){
        const {title, theme, position} = this.props;
        const cls = classnames(theme.customToolTip, {
           [theme[position]]: true
        });
        if (bool) {
            return (
                <p className={cls}>{title}</p>
            );
        } else {
            return null;
        }
    }
    render (){
        const {element, theme} = this.props;
        const {showTooltip} = this.state;
        return (
           <div className={theme.wrapCustomTooltip} onMouseEnter={(e) => this.setState({showTooltip: true})}
               onMouseLeave={(e) => this.setState({showTooltip: false})}
               >
               {element}
               {this.renderTooltip(showTooltip)}
           </div>
        );
    }
}
CustomTooltip.propTypes = {
    element: PropTypes.element,
    position: PropTypes.string,
    theme: PropTypes.object,
    title: PropTypes.string
};

CustomTooltip.defaultProps = {
    position: 'top'
};

export default CustomTooltip;
