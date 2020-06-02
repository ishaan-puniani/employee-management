import { Icon } from 'antd';
import React, { Component } from 'react';

class InfoHead extends Component {
    render() {
        return (
            <div
                style={{
                    background: '#0069c7 ',
                    textAlign: 'center',
                    color: '#fff',
                }}
            >
                <Icon type="mail"></Icon>&nbsp; Email
                address : XXXX@gmail.com &nbsp;&nbsp;
                <Icon type="clock-circle"></Icon>&nbsp;
                Working Hours : Mon-Fri 9am to 6pm
                Phone&nbsp;&nbsp;
                <Icon type="phone"></Icon>&nbsp; Line : 888
                888 888&nbsp;&nbsp;
            </div>
        );
    }
}

export default InfoHead;
