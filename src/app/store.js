import { configureStore } from '@reduxjs/toolkit'
import movieDataSlice from '../features/movie/movieDataSlice'

export default configureStore({
  reducer: {
    movie: movieDataSlice,
  },
})
// counter: counterReducer,