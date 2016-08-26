import React from 'react';
import {CardMediaPlus, CardTitleButtons} from '../../components/card-addons';
import CardActionsHover from '../../components/card-addons/CardActionsHover';

import {CardActionsSpaced} from '../../components/cardactionsspaced';
import Button from 'react-toolbox/lib/button';
import {StatusComponent} from '../../components/status-component';

class CardMediaPlusTest extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            hovered: false
        };
    }

    toggleHover (bool) {
        this.setState({hovered: bool});
    }

    render () {
        const TEST_IMG_URL = 'http://cdn.playbuzz.com/cdn/402d3240-a1df-4b70-ab11-0204c82b2b06/7917e75a-5724-4cb6-8e2d-1e42014c3eb9.jpg';
        const TEST_STATUS = 'ready';
        const _props = {
            aspectRatio: 'square',
            image: TEST_IMG_URL
        };
        return (
            <CardMediaPlus {..._props} onMouseOver={this.toggleHover.bind(this, true)}
                                       onMouseLeave={this.toggleHover.bind(this, false)}>
                {!this.state.hovered && (
                    <CardActionsSpaced>
                        <Button icon="visibility" label="10"/>
                        <StatusComponent status={TEST_STATUS}/>
                    </CardActionsSpaced>
                )}
                <CardActionsHover hovered={this.state.hovered}>
                    <CardTitleButtons buttons={[{icon: 'more_horiz', onClick: ()=>{}}]}/>
                    <Button style={{color: 'inherit', width: '100%', border: '2px solid #fff'}}
                            label={'view'.toUpperCase()} flat/>
                </CardActionsHover>
            </CardMediaPlus>
        );
    }
}

export default CardMediaPlusTest;
