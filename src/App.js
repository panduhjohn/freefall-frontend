import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './App.css';

import Details from './MainPages/Details';
import Product from './MainPages/Product';
import Cart from './MainPages/Cart';

import DropzoneMap from './DropzoneMap/DropzoneMap';
import Landing from './Landing/Landing';

function App() {
    const openMenu = () => {
        document.querySelector('.sidebar').classList.add('open');
    };
    const closeMenu = () => {
        document.querySelector('.sidebar').classList.remove('open');
    };

    return (
        <Router>
            <div className='grid-container'>
                <header className='header'>
                    <div className='brand'>
                        <button onClick={openMenu}>&#9776;</button>
                        <div className='logo'>
                            <Link to='/landing'>
                                <img
                                    className='main-logo'
                                    src='/images/icarus2.png'
                                    alt='fafLogo'
                                    id='main-logo'
                                />
                            </Link>
                        </div>
                    </div>
                    <div className='header-links'>
                        <a href='/dropzone'>Dropzones</a>
                        <a href='/products'>Products</a>
                        <a href='/cart'>Cart</a>
                        <a href='/signin'>Sign In</a>
                    </div>
                </header>

                <aside className='sidebar'>
                    <h3>Categories</h3>
                    <button
                        className='sidebar-close-button'
                        onClick={closeMenu}
                    >
                        x
                    </button>
                    <ul>
                        <li>
                            <a href='/products'>Products</a>
                        </li>
                        <li>
                            <a href='/dropzone'>Dropzones</a>
                        </li>
                        <li>
                            <a href='/cart'>Cart</a>
                        </li>
                    </ul>
                </aside>

                <main className='main'>
                    <div className='content'>
                        <Route path='/product/:id' component={Product} />
                        <Route path='/dropzone' component={DropzoneMap} />
                        <Route path='/cart/:id?' component={Cart} />
                        <Route path='/products' component={Details} />
                        <Route path='/landing' exact component={Landing} />
                    </div>
                </main>
                <footer className='footer'>RoaminHD</footer>
            </div>
        </Router>
    );
}

export default App;
