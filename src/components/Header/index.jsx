import React from 'react'
import Link from 'gatsby-link'
import './style.scss'
// import {
//   Link
// } from 'react-router-dom'

const Header = (props) => {
  return (
    <header className='main_header'>
      <div className='header'>
        <div className='header_logo'>
          <Link to={'/'}>
            <span className='logo_earth' />
          </Link>
        </div>
        <nav className='header_menu'>
          {props.menu.map((item, i) => <Link key={i} activeClassName={'active'} to={item.path}>{item.label}</Link>)}
          <a target='blank' href='http://blog.fair.coop'>Blog</a>
          {/* <a href='http://wiki.fair.coop'>Wiki</a> */}
        </nav>
      </div>
    </header>
  )
}

export default Header
