import React from 'react'
import {Fragment} from 'react'
import {Outlet, Link } from "react-router-dom";
import './navigation.styles.scss';

function Navigation() {
  return (
    <Fragment>
        <div className = "navigation">
            <Link className = 'logo-container' to='/'>
            <div>Home</div>
            </Link>
          
          <div className = "nav-links-container">
            <Link className = "nav-link" to='/shop'>
                SHOP
            </Link>
            <Link className = "nav-link" to='/auth'>
                SIGN IN
            </Link>
          </div>
        </div>
        <Outlet />
    </Fragment>
  )
}

export default Navigation;