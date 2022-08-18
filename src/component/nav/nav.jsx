import React from 'react'
import './nav.css'

export default function Nav() {
  return (
    <section className='nav'>
    <div className='nav-header'>
        <a href='/'>glumos</a>
    </div>
    <div className='nav-content'>
        <a href='/'>Login</a>
        <a style={{color:'#000AFF'}} href='/'>Signup</a>
    </div>
    </section>
  )
}
