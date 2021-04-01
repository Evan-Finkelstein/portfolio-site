import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './App.css';

export default class DashMenu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false
        }

        this.togglePanel = this.togglePanel.bind(this);
    }

    togglePanel(e) {
        this.setState({ open: !this.state.open })
    }


    render() {
        return (
            <div>
                { !this.state.open ? <div onClick={(e) => this.togglePanel(e)} className='menu'><span className='menu-icon'>Menu</span></div>
                    : <div onClick={(e) => this.togglePanel(e)} className='menu'><span className='menu-icon'>Close</span></div>}
                {this.state.open ? (
                    <div className='dash'>
                        <Link to={'/'}>Home</Link>
                        <Link to={'/tips'}> Tips </Link>
                        <Link to={'/about'}> About</Link>
                        <Link to={'/links'}>Links</Link>
                        <Link to={'/gallery'}>Gallery</Link>

                    </div>
                ) : null}
            </div>
        );
    }
}
