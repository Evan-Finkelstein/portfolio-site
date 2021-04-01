import React, { Component } from 'react'
import Landing from './Landing.js'
import Header from './Header.js'
import Footer from './Footer.js'
import DashMenu from './DashMenu.js';
import Tips from './Tips.js';
import About from './About.js';
import Links from './Links.js';
import Gallery from './Gallery'


import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

import './App.css';





export default class App extends Component {

  render() {
    return (
      <div className='main'>


        <Router>
          <Header />

          <DashMenu />
          <div className='display'>
            <Switch>
              <Route exact path='/'
                render={(routerProps) =>
                  <div>
                    <Landing
                      {...routerProps}
                    /></div>
                }

              />
              <Route exact path='/tips'
                render={(routerProps) =>
                  <div>
                    <Tips
                      {...routerProps}
                    /></div>
                }

              />
              <Route exact path='/links'
                render={(routerProps) =>
                  <div>
                    <Links
                      {...routerProps}
                    /></div>
                }

              />
              <Route exact path='/about'
                render={(routerProps) =>
                  <div>
                    <About
                      {...routerProps}
                    /></div>
                }

              />
              <Route exact path='/gallery'
                render={(routerProps) =>
                  <div>
                    <Gallery
                      {...routerProps}
                    /></div>
                }

              />


            </Switch>
          </div>
          <Footer />
        </Router>
      </div>
    )
  }
}

