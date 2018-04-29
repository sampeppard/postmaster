import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {

    render() {
        return (
            <header className="header">
                <Link to="/">
                    <h1>Readable</h1>
                </Link>
            </header>
        )
    }
}

export default Header