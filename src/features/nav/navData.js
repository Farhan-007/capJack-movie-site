import React from 'react'
import { useSelector } from 'react-redux'

export function NavDataList() {
    const nav = useSelector((state) => state.navData.value)
    // const dispatch = useDispatch()

    console.log(nav)

    return (
        <div>
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