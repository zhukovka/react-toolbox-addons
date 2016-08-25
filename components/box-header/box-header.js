import React, {PropTypes, Component} from 'react';
import {CardTitle} from 'react-toolbox/lib/card';
import Button from 'react-toolbox/lib/button';

class RTBoxHeader extends Component{

    static propTypes = {
        avatar: PropTypes.string,
        buttons: PropTypes.array.shape({
            icon: PropTypes.string.isRequired,
            handler: PropTypes.func.isRequired
        }),
        subtitle: PropTypes.string,
        title: PropTypes.string.isRequired
    };

    render (){
        const { buttons, ...other} = this.props;
        return (
            <div>
                <CardTitle {...other}>

                    <div>
                        {
                            buttons.map((btn, index)=>(
                                <Button key={index} icon={btn.icon} onClick={btn.handler} />
                            ))
                        }
                    </div>
                </CardTitle>
            </div>
        );
    }
}
export {RTBoxHeader};
