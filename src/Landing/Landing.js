import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Landing.css';

export class Landing extends Component {
    render() {
        return (
            <>
                <div className='container'>
                    <div className='box1'>
                        <div>
                            <h1>Fly Free</h1>
                            <br />
                            <h3 className='landing-text' style={{paddingBottom: '30px'}}>
                                Our services provide you with a different way to
                                have a meaningful sendoff. <br />
                            </h3>

                            <h4 className='landing-text'>
                                No matter where you are, anytime you look to the
                                sky, you will be reminded of your loved ones.
                            </h4>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
