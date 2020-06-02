import { Layout as AntLayout } from 'antd';
import React, { Component } from 'react';
import PublicHeader from 'view/layout/PublicHeader';
import InfoHead from 'view/layout/InfoHead';
const { Content, Footer } = AntLayout;

class PublicLayout extends Component {
    render() {
        return (
            <AntLayout>
                <InfoHead />
                <PublicHeader />
                <AntLayout>
                    <Content>{this.props.children}</Content>
                </AntLayout>
                <Footer>footer</Footer>
            </AntLayout>
        );
    }
}

export default PublicLayout;
