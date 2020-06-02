import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faEnvelopeOpenText,
    faClock,
    faPhoneVolume,
} from '@fortawesome/free-solid-svg-icons';

import './detailbar.css';

function DetailBar(props) {
    const [email, working_hour, phone_line] = [
        props.email,
        props.working_hour,
        props.phone_line,
    ];

    return (
        <div className='top-bar'>
            <div className='detail-bar'>
                <ul>
                    <li>
                        <div>
                            <p>
                                {' '}
                                <FontAwesomeIcon icon={faEnvelopeOpenText} /> Email
                                address : <span style={{ fontWeight: 900 }}>{email}</span>
                            </p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <p>
                                {' '}
                                <FontAwesomeIcon icon={faClock} /> Working Hours :{' '}
                                <span style={{ fontWeight: 900 }}>{working_hour}</span>
                            </p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <i></i>
                            <p>
                                {' '}
                                <FontAwesomeIcon
                                    className='phone'
                                    icon={faPhoneVolume}
                                />{' '}
                                Phone Line :{' '}
                                <span style={{ fontWeight: 900 }}>{phone_line}</span>
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
            <div className='top-btn'>
                <button type='button'>Get Started Now</button>
            </div>
        </div>
    );
}

export default DetailBar;
