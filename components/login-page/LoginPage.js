import React, {PropTypes} from 'react';
import InjectOverlay from 'react-toolbox/lib/overlay/Overlay.js';
import classnames from 'classnames';


const factory = (Overlay) => {
    const LoginPage = (props) => {
        const {theme} = props;
        const _contentCSS = classnames(theme.content, theme.small);
        const _mainContainer = classnames(theme.mainContainer, {
            [theme.active]: props.active
        });
        const _logoStyle = {
            background: `${props.bgColor} url(${props.logo}) no-repeat 10% 50%`
        };
        return (
            <Overlay theme={theme}
                     active={props.active}
                     onClick={props.onOverlayClick}
                     onEscKeyDown={props.onEscKeyDown}
                     onMouseDown={props.onOverlayMouseDown}
                     onMouseMove={props.onOverlayMouseMove}
                     onMouseUp={props.onOverlayMouseUp}
                >
                <div className={_mainContainer}>
                <div className={theme.wrapper}
                     style={_logoStyle}>
                </div>
                    <div data-react-toolbox='dialog' className={_contentCSS}>
                        <section role='body' className={props.theme.body}>
                            {props.children}
                        </section>
                    </div>
                </div>

            </Overlay>
        );
    };
    LoginPage.propTypes = {
        active: PropTypes.bool,
        bgColor: PropTypes.string,
        children: PropTypes.any,
        logo: PropTypes.string,
        onEscKeyDown: PropTypes.func,
        onOverlayClick: PropTypes.func,
        onOverlayMouseDown: PropTypes.func,
        onOverlayMouseMove: PropTypes.func,
        onOverlayMouseUp: PropTypes.func,
        theme: PropTypes.shape({
            mainContainer: PropTypes.string,
            wrapper: PropTypes.string,
            body: PropTypes.string,
            content: PropTypes.string,
            small: PropTypes.string,
            normal: PropTypes.string,
            large: PropTypes.string,
            title: PropTypes.string,
            navigation: PropTypes.string,
            button: PropTypes.string,
            overlay: PropTypes.string,
            backdrop: PropTypes.string
        })
    };

    return LoginPage;
};

const factoryLoginPage = factory(InjectOverlay);

export default factoryLoginPage;

