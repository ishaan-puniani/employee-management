import { Icon, Layout, Menu } from 'antd';
import layoutActions from 'modules/layout/layoutActions';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import HeaderWrapper from 'view/layout/styles/HeaderWrapper';
import layoutSelectors from 'modules/layout/layoutSelectors';
import { i18n } from 'i18n';
import I18nSelect from 'view/layout/I18nSelect';
import logo from 'assets/logo.png';
import SocialButtons from 'view/layout/styles/SocialButtons';
const { Header: AntHeader } = Layout;

class PublicHeader extends Component {
    doToggleMenu = () => {
        const { dispatch } = this.props;
        dispatch(layoutActions.doToggleMenu());
    };

    userMenu = (
        <Menu selectedKeys={[]}>
            <Menu.Item key="userCenter">
                <Icon type="user" />
                {i18n('auth.profile.title')}
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item key="logout">
                <Icon type="logout" />
                {i18n('auth.signout')}
            </Menu.Item>
        </Menu>
    );

    render() {
        return (
            <HeaderWrapper>
                <AntHeader>
                    <img
                        src={logo}
                        alt="logo"
                        style={{
                            width: '200px',
                            margin: '5px',
                        }}
                    />
                    <Menu
                        className="nav-menu"
                        theme="light"
                        mode="horizontal"
                        defaultSelectedKeys={[]}
                    >
                        <Menu.Item key="1">Home</Menu.Item>
                        <Menu.Item key="2">
                            About Us
                        </Menu.Item>
                        <Menu.Item key="3">
                            Services
                        </Menu.Item>
                        <Menu.Item key="4">
                            Agents
                        </Menu.Item>
                        <Menu.Item key="5">
                            Partner Institutions
                        </Menu.Item>
                        <Menu.Item key="6">
                            Counsellors
                        </Menu.Item>
                        <Menu.Item key="7">
                            Contact
                        </Menu.Item>
                    </Menu>
                    <div style={{ display: 'flex' }}>
                        <span className="i18n-select">
                            <I18nSelect />
                        </span>
                        <SocialButtons>
                            <Icon
                                type="google"
                                style={{
                                    color: '#007bff',
                                }}
                            />
                            <Icon
                                type="facebook"
                                style={{
                                    color: '#007bff',
                                }}
                            />
                            <Icon
                                type="youtube"
                                style={{
                                    color: '#007bff',
                                }}
                            />
                        </SocialButtons>
                    </div>
                </AntHeader>
            </HeaderWrapper>
        );
    }
}

const select = (state) => ({
    menuVisible: layoutSelectors.selectMenuVisible(state),
});

export default connect(select)(PublicHeader);
