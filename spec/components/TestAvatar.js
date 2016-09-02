import React from 'react';
import EditableAvatar from '../../components/editable-avatar';

const TEST_IMAGE_FOR_AVATAR = 'https://dl.dropboxusercontent.com/u/2247264/assets/m.jpg';


class TestAvatar extends React.Component {
    state = {
        image: TEST_IMAGE_FOR_AVATAR
    };

    onUpload (file, result, e){
        this.setState({
            image: result
        }, ()=>{
            console.log(file, e);
        });
    }
    render () {
        return (
                <EditableAvatar image={this.state.image}
                                editable
                                onUpload={this.onUpload.bind(this)}
                />
        );
    }
}

export default TestAvatar;

