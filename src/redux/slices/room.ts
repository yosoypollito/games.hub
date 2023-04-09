import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '@/redux/store'

import type { Room, InitialState } from '@/types'

export const fetchRoom = createAsyncThunk('room/fetchRoom', async (id:string)=>{
  const data = await request<{
    room:Room.Item
  }>({
    method:"GET",
    url:`${process.env.NEXT_PUBLIC_API_URL}/api/room/${id}`
  });

  if(!data?.room){
    throw new Error("Cannot get room information")
  }

  return data.room;
})

const initialState:InitialState<Room.Item> = {
  data:{
    leader:'',
    game:'',
    players:{},
    id:''
  },
  status: 'idle',
  error: null
}

export const roomSlice = createSlice({
  name: 'room',
  initialState,
  reducers: {
    updateRoom(state, action: PayloadAction<{ [field:string]: any; }>){
      state.data = {
        ...state.data,
        ...action.payload
      }
    }
  },
  extraReducers(builder){
    builder
    .addCase(fetchRoom.pending, (state) =>{
      state.status = 'loading'
    })
    .addCase(fetchRoom.fulfilled, (state, action: PayloadAction<Room.Item>)=>{
      state.status = 'succeeded'
      state.data = action.payload
    })
    .addCase(fetchRoom.rejected, (state, action)=>{
      state.status = 'failed'
      state.error = action.error.message || null
    })
  }
})

export const { updateRoom } = roomSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectRoom = (state: RootState) => state.room.data

export default roomSlice.reducer

import request from '@/api'
