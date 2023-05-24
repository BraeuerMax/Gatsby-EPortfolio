import React from 'react'
import Navbar from './navbar'
import '../styles/global.css'

export default function Layout({ children }) {
  return (
    <div className='Layout'>
        <Navbar />

        <div className="content">
            { children }
        </div>

        <footer>
            <p>Copyright 2023 B6</p>
        </footer>
    </div>
  )
}
