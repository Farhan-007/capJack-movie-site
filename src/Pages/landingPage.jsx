import React from 'react'
import { NavLink } from 'react-router-dom'

function LandingPage() {
  return (
    <div>
        

      <NavLink to="watch">watch</NavLink>
      <NavLink to="home">home</NavLink>
      <NavLink to="filter">filter</NavLink>
    </div>
  )
}

export default LandingPage
