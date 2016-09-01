import React from 'react';
import EditableAvatar from '../../components/editable-avatar';

const TEST_IMAGE_FOR_AVATAR = 'https://placeimg.com/80/80/animals';


class TestAvatar extends React.Component {
    state = {
        image: TEST_IMAGE_FOR_AVATAR,
    };

    onUpload (result){
        this.setState({
            image: result
        });
    }
    render () {
        return (
            <EditableAvatar image={this.state.image}
                            editable={true}
                            onUpload={this.onUpload.bind(this)}
            />
        );
    }
}
;

export default TestAvatar;

