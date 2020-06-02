import * as React from 'react';
import { Link } from 'react-router-dom';
import Tabs from 'blocks/tab/tabs';
import Tab from 'blocks/tab/tab';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFacebookF,
    faTwitter,
    faLinkedinIn,
    faYoutube,
} from '@fortawesome/free-brands-svg-icons';
export default function Masthead() {
    const [key, setKey] = React.useState('home');

    const menuClickHandler = (val) => {
        setKey((prev) => {
            if (prev !== val) {
                return val;
            }
            return prev;
        });
    };
    return (
        <div className='masthead'>
            <div className='masthead__content'>
                <div className='bottom-bar'>
                    <div className='nav-list-item'>
                        <Tabs size='small' className='navbartabs'>
                            <Tab
                                isFullWidth='true'
                                isActive={key === 'home' ? true : false}
                            >
                                <Link onClick={() => menuClickHandler('home')} to='/home'>
                                    Home
                                </Link>
                            </Tab>
                            <Tab isFullWidth isActive={key === 'about-us' ? true : false}>
                                <Link
                                    onClick={() => menuClickHandler('about-us')}
                                    to='/about-us'
                                >
                                    About Us
                                </Link>
                            </Tab>
                            <Tab isFullWidth isActive={key === 'services' ? true : false}>
                                <Link
                                    onClick={() => menuClickHandler('services')}
                                    to='/services'
                                >
                                    Services
                                </Link>
                            </Tab>
                            <Tab isFullWidth isActive={key === 'agents' ? true : false}>
                                <Link
                                    onClick={() => menuClickHandler('agents')}
                                    to='/agents'
                                >
                                    Agents
                                </Link>
                            </Tab>
                            <Tab
                                isFullWidth
                                isActive={key === 'partnerInstitutions' ? true : false}
                            >
                                <Link
                                    onClick={() =>
                                        menuClickHandler('partnerInstitutions')
                                    }
                                    to='/partnerInstitutions'
                                >
                                    Partner Institutions
                                </Link>
                            </Tab>
                            <Tab
                                isFullWidth
                                isActive={key === 'counsellors' ? true : false}
                            >
                                <Link
                                    onClick={() => menuClickHandler('counsellors')}
                                    to='/counsellors'
                                >
                                    Counsellors
                                </Link>
                            </Tab>
                            <Tab isFullWidth isActive={key === 'contact' ? true : false}>
                                <Link
                                    onClick={() => menuClickHandler('contact')}
                                    to='/contact'
                                >
                                    Contact
                                </Link>
                            </Tab>
                        </Tabs>
                    </div>
                    <div className='nav-social'>
                        <ul>
                            <li>
                                <a href='#/'>
                                    <span>
                                        <FontAwesomeIcon icon={faFacebookF} />
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a href='#/'>
                                    <span>
                                        <FontAwesomeIcon icon={faTwitter} />
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a href='#/'>
                                    <span>
                                        <FontAwesomeIcon icon={faLinkedinIn} />
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a href='#/'>
                                    <span>
                                        <FontAwesomeIcon icon={faYoutube} />
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
