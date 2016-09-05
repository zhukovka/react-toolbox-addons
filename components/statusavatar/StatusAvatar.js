import React, {PropTypes} from 'react';
import Avatar from 'react-toolbox/lib/avatar';
import StatusComponent from '../../components/status-component';

const StatusAvatar = ({status, theme, ...other}) => {
    return (
            <Avatar {...other} theme={theme}>
                <StatusComponent status={status} className={theme.status} />
            </Avatar>

    );
};
StatusAvatar.propTypes = {
    image: PropTypes.string,
    status: PropTypes.string.isRequired,
    theme: PropTypes.shape({
        avatar: PropTypes.string,
        status: PropTypes.string
    })
};
export default StatusAvatar;
