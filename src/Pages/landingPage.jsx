import React from 'react'
import { NavLink } from 'react-router-dom'
import { Searchbar } from '../components/Search/search'

function LandingPage() {
  return (
    <>
    <div className="wrapper flex flex-col justify-between min-h-[70dvh] md:min-h-[90dvh] p-8 px-20" >
      <div className="searchWrap flex flex-col items-center md:items-start gap-5 pt-28">
        <div className="logo text-5xl">Jack</div>
        <Searchbar />
      </div>
      <div className="homeBtn flex justify-center">
        <NavLink to={'/home'}>
          <button className=' text-2xl md:px-[12rem] p-2 rounded-xl'>
            View Full Site
          </button>
        </NavLink>
      </div>
    </div>
    </>
  )
}



export default LandingPage
