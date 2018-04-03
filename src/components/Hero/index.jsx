import React from 'react'
import './style.scss'
import {Book, Github} from '../../icons'
const Hero = (props) => {
  return (
    <section className='hero'>
      <div className='hero_panel left'>
      <div className='wrapper'>
        <span className='logo' />
        <h1>Open Coop Ecosystem</h1>
        <h5>The Open Apps Cooperative Ecosystem (OCE) is an open networked organization that works toward creating and assembling economic and organizational software for use by groups working for systemic change on the ground.</h5>
        <div className='hero_actions'>
          <a target='blank' href='https://guide.opencoopecosystem.net'><span><Book width='18' height='18' /></span>Read the guide</a>
          <a target='blank' href='https://github.com/opencooperativeecosystem'><span><Github width='18' height='18' /></span> View on github</a>
        </div>
      </div>
      </div>
      <div className='hero_panel right' />
    </section>
  )
}

export default Hero
