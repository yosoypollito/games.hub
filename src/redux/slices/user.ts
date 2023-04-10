import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/redux/store";

import type { User, InitialState } from "@/types";

import request from "@/api";
import { Auth } from "@/firebase/client";

const { onAuthChange } = Auth();

export const fetchUser = createAsyncThunk("user/fetchUser", async () => {
  const user = await onAuthChange();

  if (user) {
    return {
      displayName: user.displayName,
      uid: user.uid,
    };
  }

  return null;
});

export const userJoinToRoom = createAsyncThunk(
  "user/joinToRoom",
  async (id: string) => {
    const room = await request({
      method: "PUT",
      url: `${process.env.NEXT_PUBLIC_API_URL}/api/room/${id}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      data: {
        trans: "user.join",
      },
    });

    return room;
  }
);

const initialState: InitialState<
  User.Item | null,
  "joining.to.room" | "joined.to.room" | "join.to.room.failed"
> = {
  data: null,
  status: "idle",
  error: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        fetchUser.fulfilled,
        (state, action: PayloadAction<User.Item | null>) => {
          state.status = "succeeded";
          state.data = action.payload;
        }
      )
      .addCase(fetchUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || null;
      });

    builder
      .addCase(userJoinToRoom.pending, (state) => {
        state.status = "joining.to.room";
      })
      .addCase(userJoinToRoom.fulfilled, (state) => {
        state.status = "joined.to.room";
      })
      .addCase(userJoinToRoom.rejected, (state, action) => {
        state.status = "join.to.room.failed";
        state.error = action.error.message || null;
      });
  },
});

export const {} = userSlice.actions;

export const selectUser = (state: RootState) => state.user.data;

export default userSlice.reducer;
