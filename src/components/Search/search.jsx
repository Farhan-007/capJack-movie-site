import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { setMovieData } from '../../features/movie/movieDataSlice';
import { setMovieInput } from '../../features/movie/movieSearchSlice';
import { MovieDataList } from '../../features/movie/movieData';
import { NavDataList } from '../../features/nav/navData';
import { setNavInput } from '../../features/nav/navSearchSlice';
import { setNavData } from '../../features/nav/navDataSlice';

export function SearchFun() {
    const dispatch = useDispatch()
    const searchInput = useSelector((state) => state.movieSearch.value)
    const navSearchInput = useSelector((state) => state.navSearch.value)

    let apikey = `309f050b4ea82a0bf5e08ceeecea0f50`;

    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apikey}&query=${searchInput}`)

        .then(response => response.json())

        .then(data => {

            dispatch(setMovieData(data));
            // console.log(data)
            // setBtnClicked(true)
        })
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apikey}&query=${navSearchInput}`)

        .then(res => res.json())

        .then(data => {

            dispatch(setNavData(data));
            // console.log(data)
            // setBtnClicked(true)
        })
}

export function Searchbar() {

    const [input, setInput] = useState('')
    const dispatch = useDispatch()
    const handleClick = () => {
        dispatch(setMovieInput(input))
        SearchFun()
    }
    return (
        <div>
            <div className="searchBar flex text-2xl">
                <input type="text" onChange={(e) => { setInput(e.target.value) }} />

                <button onClick={handleClick()}>
                    <NavLink to={'/filter'}>
                        search
                    </NavLink>
                </button>
            </div>
            {/* {
                input ? <MovieDataList /> : null
            } */}
        </div>
    )
}

export function NavSearchbar() {
    const [input, setInput] = useState('')
    const [showNav, setShowNav] = useState(true)

    const dispatch = useDispatch()

    const handleChange = () => {
        dispatch(setNavInput(input))
        SearchFun()
    }

    return (
        <div>
            <div className="searchBar flex text-2xl">
                <input type="text" onClick={()=>{setShowNav(true)}} onChange={(e) => { setInput(e.target.value) }} />

                <button onClick={handleChange()}>
                    search
                </button>
            </div>
            <div className=' absolute z-10 h-[100dvh]' style={{display: showNav ? 'block' : 'none' }} onClick={()=>{setShowNav(false)}}>
                <ul className='bg-black' >
                    {
                        input ? <NavDataList /> : null
                    }
                </ul>
            </div>
        </div>
    )
}