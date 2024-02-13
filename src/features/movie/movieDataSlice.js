import { createSlice } from '@reduxjs/toolkit'


export const movieDataSlice = createSlice({
  name: 'movie',
  initialState: {
    value : [{}]
  },
  reducers: {
    setMovieData: (state, action) => {
        state.value = action.payload
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
      
    },
  },
})

// Action creators are generated for each case reducer function
export const { setMovieData, decrement, incrementByAmount } = movieDataSlice.actions

export default movieDataSlice.reducer