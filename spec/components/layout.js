import React from 'react';
import {Layout, Panel} from 'react-toolbox';
import NavDrawerPlus from '../../components/nawdrawerplus';
import SidebarPlus from '../../components/sidebarplus';
import {Card} from 'react-toolbox/lib/card';
import ButtonGroup from '../../components/buttongroup/ButtonGroup';
import {List, ListItem} from 'react-toolbox/lib/list';
import CardActionsSpaced from '../../components/cardactionsspaced/index';
import {IconButton} from 'react-toolbox/lib/button';
import VideoPanel from '../../components/videopanel';


class LayoutTest extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            drawerOpen: true,
            drawerPinned: true,
            sidebarPinned: true,
            sidebarWidth: 5,
            loremIpsums: 1
        };
    }

    toggleDrawer = (event) => {
        this.setState({drawerOpen: !this.state.drawerOpen, drawerPinned: !this.state.drawerPinned});
    };

    renderTag (iframe) {
        if (iframe) {
            console.log(iframe);
        }
    }

    render () {

        return (
            <section>
                <h5>Layout</h5>
                <div style={{ width: '100%', height: '60rem', margin: '1.8rem 0' }}>
                    <Card>
                        <CardActionsSpaced>
                            <IconButton icon='supervisor_account' onClick={()=>this.setState({
                                drawerOpen: !this.state.drawerOpen,
                                drawerPinned: !this.state.drawerPinned
                            })}/>
                            <ButtonGroup>
                                <IconButton icon='wb_sunny'/>
                                <IconButton icon='map' onClick={()=>this.setState({
                                sidebarPinned: !this.state.sidebarPinned
                            })}/>
                            </ButtonGroup>
                        </CardActionsSpaced>
                    </Card>
                    <Layout>
                        <NavDrawerPlus title="Users" active={this.state.drawerOpen} pinned={this.state.drawerPinned}
                                       onClick={this.toggleDrawer.bind(this)}>

                            <List selectable ripple>
                                <ListItem
                                    avatar='https://dl.dropboxusercontent.com/u/2247264/assets/m.jpg'
                                    caption='Dr. Manhattan'
                                    legend="Jonathan 'Jon' Osterman"
                                    rightIcon='star'
                                />
                            </List>
                        </NavDrawerPlus>
                        <Panel>
                            <VideoPanel
                                buttons={[{icon: 'view_array', inverse: true, onClick: ()=>{
                                return this.setState({
                                sidebarPinned: !this.state.sidebarPinned,
                                drawerOpen: !this.state.drawerOpen,
                                drawerPinned: !this.state.drawerPinned
                            });}}, {icon: 'fullscreen', inverse: true}]}>
                                <iframe width="1280" height="720"
                                        src="https://www.youtube.com/embed/sGbxmsDFVnE?rel=0&amp;showinfo=0"
                                        frameBorder="0" allowFullScreen ref={(iframe)=>this.renderTag(iframe)}/>
                            </VideoPanel>
                        </Panel>
                        <SidebarPlus title="Map" pinned={this.state.sidebarPinned}>
                            KUKURUKU
                        </SidebarPlus>
                    </Layout>
                </div>
            </section>
        );
    }


}

export default LayoutTest;
