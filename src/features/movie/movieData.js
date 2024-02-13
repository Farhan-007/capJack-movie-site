import React from 'react'
import { useSelector, useDispatch } from 'react-redux'


export function MovieDataList() {
    const movies = useSelector((state) => state.movie.value)
    const dispatch = useDispatch()

    console.log(movies)
    return (
        <div>
            {
                movies.results.map((item, key) => {
                    return (
                        <>
                            <a key={item.id} href={`https://vidsrc.xyz/embed/movie/${item.id}`}>
                                <li>{item.title}</li>
                            </a>
                        </>
                    )
                })
            }
        </div >
    )
}

export function PlayMovie() {

}


