import React from 'react';
import AvatarCheckbox from '../../components/avatarcheckbox';
import Checkbox from 'react-toolbox/lib/checkbox';
class TestAvatarCheckbox extends React.Component {
    state = {
        checked: true
    };

    onUpload (file, result, e) {
        this.setState({
            image: result
        }, ()=> {
            console.log(file, e);
        });
    }

    render () {
        return (
            <section>
                <h5>Avatar checked/uncheked</h5>
                <AvatarCheckbox checked={this.state.checked} avatar="https://dl.dropboxusercontent.com/u/53778939/jack_sparrow.png"
                                onChange={(val)=>{this.setState({checked: val});}}/>
                <Checkbox
                    checked={this.state.checked}
                    label="Checked option"
                    onChange={(val)=>{this.setState({checked: val});}}
                />
            </section>
        );
    }
}

export default TestAvatarCheckbox;
