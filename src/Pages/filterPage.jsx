import React from 'react'
import { useSelector } from 'react-redux';
import { NavSearchbar} from '../components/Search/search';
import { MovieDataList } from '../features/movie/movieData';



const FilterPage = () => {
    const searchInput = useSelector((state) => state.movieSearch.value)
    // const dispatch = useDispatch()

    return (
        <div>
            <div >

            </div>
            <NavSearchbar />
            {/* <input type="text" onChange={(e) => { setInputMov(e.target.value); console.log(inputMov); }} /> */}
            <div className="wrapper">
                <h1>showing search results for {searchInput} </h1>

                <div className="results">

                    <MovieDataList />

                    {/* <MovieData /> */}

                </div>
            </div>
        </div>
    )
}

export default FilterPage
