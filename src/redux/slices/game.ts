import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '@/redux/store'

const initialState:GameState = {
}

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
  }
})

export const {} = gameSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectGame = (state: RootState) => state.game

export default gameSlice.reducer
