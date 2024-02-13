import { createSlice } from '@reduxjs/toolkit'


export const navSearchSlice = createSlice({
  name: 'navSearch',
  initialState: {
    value: ("")
  },
  reducers: {
    setNavInput: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setNavInput } = navSearchSlice.actions

export default navSearchSlice.reducer