import { configureStore } from '@reduxjs/toolkit'
import movieDataSlice from '../features/movie/movieDataSlice'
import movieSearchSlice from '../features/movie/movieSearchSlice'
import navSearchSlice  from '../features/nav/navSearchSlice'
import navDataSlice from '../features/nav/navDataSlice'


export default configureStore({
  reducer: {
    movie: movieDataSlice,
    movieSearch : movieSearchSlice,
    navData : navDataSlice,
    navSearch : navSearchSlice,
  },
  // reducer: {
  // },
})
// counter: counterReducer,