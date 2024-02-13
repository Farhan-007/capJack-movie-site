import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
// import Search from '../APIs/Search';
// import { Counter } from '../features/counter/counter';
// import counterSlice from '../features/counter/counterSlice';
import { MovieDataList } from '../features/movie/movieData';
import { movieDataSlice, setMovieData } from '../features/movie/movieDataSlice';



const FilterPage = () => {
    // let arr = [1,2,3,4,5]
    const [inputMov, setInputMov] = useState('');
    const [btnClicked, setBtnClicked] = useState(false)
    const dispatch = useDispatch()
    
    const handleSearch = () => {

        let apikey = `309f050b4ea82a0bf5e08ceeecea0f50`;
    
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apikey}&query=${inputMov}`)
        
        .then(response => response.json())
        
        .then(data => {
            
            dispatch(setMovieData(data));
            console.log(data) 
            setBtnClicked(true)
        })
        
        // console.log(this.movie)
    }
    // const count = useSelector((state) => state.counter.value)
    // const movies = useSelector((state) => state.movie.value)
    // console.log(movies.results)
    // const [movieName, setMovieName] = useState('');

    return (
        <div>
            <input type="text" onChange={(e) => { setInputMov(e.target.value); console.log(inputMov); }} />
            <button onClick={handleSearch()}>search</button>
            <div className="wrapper">
                <h1>showing search results for {inputMov} </h1>

                <div className="results">
                    {
                        btnClicked? <MovieDataList /> :null 
                    }
                    {/* <MovieData /> */}
                    
                </div>
            </div>
            {/* <Counter /> */}
            {/* <Search searchMovie={inputMov} /> */}

        </div>
    )
}

export default FilterPage
