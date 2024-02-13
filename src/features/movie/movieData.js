import React from 'react'
import { useSelector, useDispatch } from 'react-redux'


export function MovieDataList() {
    const movies = useSelector((state) => state.movie.value)
    // const dispatch = useDispatch()

    // console.log(movies)
    return (
        <div>
            <ul>
                {
                    movies.results.map((item, i) => {

                        return (
                            <div key={i}>
                                <a href={`https://vidsrc.xyz/embed/movie/${item.id}`}>
                                    <li>{item.title}</li>
                                </a>
                            </div>
                        )
                    })
                }
            </ul>
        </div >
    )
}

export function PlayMovie() {

}


