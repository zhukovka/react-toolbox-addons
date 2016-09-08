import React, {PropTypes} from 'react';
import Dialog from 'react-toolbox/lib/dialog';
import {Button} from 'react-toolbox/lib/button';
import {themr} from 'react-css-themr';
import {DIALOGWITHIMAGE} from '../identifiers';
import theme from './theme.scss';

const factory = () => {
    class DialogWithImage extends Dialog {

        static propTypes = {
            actions: PropTypes.array,
            active: PropTypes.bool,
            background: PropTypes.string,
            captureImage: PropTypes.string,
            children: PropTypes.node,
            className: PropTypes.string,
            onEscKeyDown: PropTypes.func,
            onOverlayClick: PropTypes.func,
            onOverlayMouseDown: PropTypes.func,
            onOverlayMouseMove: PropTypes.func,
            onOverlayMouseUp: PropTypes.func,
            theme: PropTypes.shape({
                active: PropTypes.string,
                body: PropTypes.string,
                button: PropTypes.string,
                dialog: PropTypes.string,
                navigation: PropTypes.string,
                title: PropTypes.string
            }),
            title: PropTypes.string,
            type: PropTypes.string
        };
        state = {
            active: false
        };

        handleToggle = () => {
            this.setState({active: !this.state.active});
        };

        render () {
            const {children} = this.props;
            return (
                <div>
                    <Button label='Show dialog' onClick={this.handleToggle}/>
                    <Dialog type={this.props.type}
                            actions={this.actions}
                            active={this.state.active}
                            onEscKeyDown={this.handleToggle}
                            onOverlayClick={this.handleToggle}
                            theme={theme}
                    >
                        {children}
                        <div className={theme.imageCapture} style={{background: this.props.background}}>
                            <img src={this.props.imageCapture}/>
                        </div>
                    </Dialog>
                </div>
            );
        }
    }
    return DialogWithImage;
};

const DialogwithImage = factory();
export default themr(DIALOGWITHIMAGE)(DialogwithImage);
export {factory as dialogImageFactory};
export {DialogwithImage};
