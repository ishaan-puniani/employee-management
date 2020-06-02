import Tabs from '../../blocks/tab/tabs';
import Tab from '../../blocks/tab/tab';
import * as constants from './constants';
import React from 'react';
import bindHandlers from 'src/bindHandlers';

class NavLink extends React.PureComponent {
    state = {
        activeTabNode: null,
    };

    onHandleSelectedTabChange(selectedTabId) {
        if (selectedTabId !== this.state.activeTabNode) {
            this.setState({
                activeTabNode: selectedTabId,
            });
        }
    }

    render() {
        const { activeTabNode } = this.state;
        const selectedTabId = activeTabNode;
        return (
            <Tabs>
                <Tab
                    id={constants.HOME_TAB}
                    isActive={selectedTabId === constants.HOME_TAB}
                    onSelect={this.onHandleSelectedTabChange}
                >
                    Home
                </Tab>
                <Tab
                    id={constants.ABOUT_US_TAB}
                    isActive={selectedTabId === constants.ABOUT_US_TAB}
                    onSelect={this.onHandleSelectedTabChange}
                >
                    About us
                </Tab>
            </Tabs>
        );
    }
}

export default bindHandlers(NavLink);
