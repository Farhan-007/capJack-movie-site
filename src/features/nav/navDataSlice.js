import { createSlice } from '@reduxjs/toolkit'


export const navDataSlice = createSlice({
  name: 'movie',
  initialState: {
    value: [{}]
  },
  reducers: {
    setNavData: (state, action) => {
      state.value = action.payload
    },
    clearNavData: (state) => {
      state.value = 0
    },
  },
})

// Action creators are generated for each case reducer function
export const { setNavData, clearNavData } = navDataSlice.actions

export default navDataSlice.reducer