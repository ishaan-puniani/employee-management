import * as React from 'react';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer__copyright">
                {' '}
                2020&nbsp;©&nbsp;
                <a
                    className="kt-link"
                    href="http://google.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Google
                </a>
            </div>
            <div className="footer__menu">
                <a
                    className="footer__menu-link"
                    href="https://googl.com/#"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    About
                </a>
                <a
                    className="footer__menu-link"
                    href="https://gogole.com/#"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Team
                </a>
                <a
                    className="footer__menu-link"
                    href="https://google.com/#"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Contact
                </a>
            </div>
        </footer>
    );
}
