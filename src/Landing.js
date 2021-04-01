import React, { Component } from 'react'
import './App.css';

export default class Landing extends Component {
    render() {
        return (
            <div className='landing'>
                <div>
                    <p>Welcome to Westbrook Community Garden!</p>
                    <img className='landing_img' src='garden.jpeg' alt='garden' />
                </div>
            </div>
        )
    }
}
