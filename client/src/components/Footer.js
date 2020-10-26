import React from 'react'

import "./Footer.css";


export default function Footer() {

    return (
        <footer>
            <div className="copyright">
                <a href="https://harveyreynier.com" target="_blank" className="top">
                    <span>Built with 💖 by </span>
                </a>
                <a href="https://harveyreynier.com" target="_blank" className="bottom">
                    <span>Harvey Reynier</span>
                </a>
            </div>
            <div className="links">
                <a href="https://github.com/hreynier/job-board" target="_blank">
                    <img src="/assets/icon/github.png" />
                </a>
            </div>
        </footer>
    )
}