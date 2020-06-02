import React from 'react';
import home_introduction from 'assets/home_introduction.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFacebookF,
    faTwitter,
    faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';

export default function Introduction(props) {
    return (
        <div className="intro-wrapper">
            <div className="intro-left-sec">
                <div className="intro-header">
                    <h5 className="intro-header__mini-title">
                        OUR INTRODUCTION
                    </h5>
                    <h2 className="intro-header__title">
                        Welcome to the Best Education
                        Globally
                    </h2>
                </div>
                <div className="intro-iconbody">
                    <div className="intro-iconitems">
                        <span>
                            <FontAwesomeIcon
                                icon={faFacebookF}
                                style={{ fontSize: '4rem' }}
                            />
                        </span>
                        <p>Title 1</p>
                    </div>
                    <div className="intro-iconitems">
                        <span>
                            <FontAwesomeIcon
                                icon={faTwitter}
                                style={{ fontSize: '4rem' }}
                            />
                        </span>
                        <p>Title 2</p>
                    </div>
                    <div className="intro-iconitems">
                        <span>
                            <FontAwesomeIcon
                                icon={faLinkedinIn}
                                style={{ fontSize: '4rem' }}
                            />
                        </span>
                        <p>Title 3</p>
                    </div>
                </div>
                <div className="intro-footer">
                    <span className="intro-footer__content">
                        There are many variations of
                        passages of but the majority have
                        suffered alteration in some form by
                        injected humour or randomised words
                        which don't look even slightly
                        believable you are going to use a
                        passage. It uses a dictionary of
                        over Latin words combined a handful.
                    </span>
                </div>
            </div>
            <div className="intro-right-sec">
                <img
                    src={home_introduction}
                    alt="home_introduction"
                ></img>
            </div>
        </div>
    );
}
