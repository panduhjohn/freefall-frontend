import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import './Nav.css';

export class Nav extends Component {
    componentDidMount() {
        const nav = document.getElementById('nav');

        window.onscroll = function () {
            if (window.pageYOffset > 10) {
                nav.style.background = 'rgb(38, 38, 39) ';
                // nav.style.boxShadow = '10px 4px 1px black'
            } else {
                nav.style.background = 'transparent';
                // nav.style.background = 'rgb(38, 38, 39) ';
                // nav.style.boxShadow = 'none';
            }
        };
    }

    render() {
        return (
            <>
                <div className='header'>
                    <div className='navbar' id='nav'>
                        <div id='main-menu'>
                            <div className='logo'>
                                <NavLink to='/' id='nav-links'>
                                    <img
                                        src='/images/icarus2.png'
                                        alt='fafLogo'
                                        id='main-logo'
                                    />
                                </NavLink>
                            </div>
                            <div className='inner-main-menu'>
                                <ul>
                                    <li>
                                        <NavLink to='/' id='nav-links'>
                                            Roamin
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/about' id='nav-links'>
                                            About
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/' id='nav-links'>
                                            Brando
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/dropzone' id='nav-links'>
                                            Dropzones
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/' id='nav-links'>
                                            Register
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/' id='nav-links'>
                                            Login
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
