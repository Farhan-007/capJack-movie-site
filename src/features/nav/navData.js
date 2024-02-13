import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { clearNavData } from './navDataSlice'

export function NavDataList() {
    const nav = useSelector((state) => state.navData.value)
    const dispatch = useDispatch()
    const [showNav, setShowNav] = useState(true)



    console.log(nav)
    return (
        <div className='h-[100dvh]' style={{display: showNav ? 'block' : 'none' }} onClick={()=>{setShowNav(false)}}>
            {
                nav.results.map((item, i) => {
                    return (
                        <div key={i}>
                            <a href={`https://vidsrc.xyz/embed/movie/${item.id}`}>
                                <li>{item.title}</li>
                            </a>
                        </div>
                    )
                })
            }
        </div >
    )
}