import React, { Component } from 'react'
import './App.css';

export default class Landing extends Component {
    render() {
        return (
            <div className='landing'>
                <div>
                    <h2>Welcome to Westbrook Community Garden!</h2>
                    <img className='landing_img' src='Garden1.jpeg' alt='garden' />
                </div>
            </div>
        )
    }
}
