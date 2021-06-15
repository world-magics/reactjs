import React from 'react';

import './Nav.css'

import {Link} from  'react-router-dom';

const Nav = () => {
    return (
        <div>
            <nav className="nav">
                <Link to="/" className="navbar-brand">Logo</Link>
               
                <ul>
                    <li>
                        <Link to="/About">About</Link>
                        
                    </li>
                    <li>
                      <Link to="/Blog">Blog</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

Nav.propTypes = {};

export default Nav;