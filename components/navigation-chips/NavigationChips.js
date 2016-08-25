import React, {Component, PropTypes} from 'react';
import {Chip} from 'react-toolbox/lib/chip';
import {Avatar} from 'react-toolbox/lib/avatar';
import {Row, Col} from '../../lib/grid';

import {
    CSS_HEADER_CHIP,
    CSS_HEADER_CHIP_LINE,
    CSS_HEADER_CHIP_AVATAR,
    CSS_HEADER_CHIP_AVATAR_ACTIVE,
    ICON_DONE
} from './constants';

class RTNavigationChips extends Component {
    static propTypes = {
        currentIndex: PropTypes.number,
        headers: PropTypes.array.isRequired,
        theme: PropTypes.object.isRequired
    };
    renderNavigationChip (chip = {}) {
        const {theme, currentIndex, headers} = this.props;
        const _chipIndex = chip.index + 1;
        const getAvatarClass = (_chipIndex <= currentIndex || 0) ? theme[CSS_HEADER_CHIP_AVATAR] + ' ' + theme[CSS_HEADER_CHIP_AVATAR_ACTIVE] : theme[CSS_HEADER_CHIP_AVATAR];
        const getAvatarIcon = (_chipIndex) < currentIndex || 0 ? ICON_DONE : '';
        const getLineClass = (_chipIndex) !== headers.length && theme[CSS_HEADER_CHIP_LINE];
        return (
            <Chip key={chip.index} className={theme[CSS_HEADER_CHIP]}>
                <Avatar className={getAvatarClass}
                        icon={getAvatarIcon}>{!getAvatarIcon && (_chipIndex)}</Avatar>
                <span className={getLineClass}>{chip.header}</span>
            </Chip>
        );
    }

    render () {
        const { headers } = this.props;
        return (
            <Row expanded>
                {
                    headers.map((header, index)=>(
                        <Col key={index} shrink={(headers.length === index + 1) && true}>
                            {this.renderNavigationChip({header, index})}
                        </Col>
                    ))
                }
            </Row>
        );
    }
}
export {RTNavigationChips};
