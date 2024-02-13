import { createSlice } from '@reduxjs/toolkit'


export const movieSearchSlice = createSlice({
  name: 'movieSearch',
  initialState: {
    value: ("")
  },
  reducers: {
    setMovieInput: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setMovieInput } = movieSearchSlice.actions

export default movieSearchSlice.reducer