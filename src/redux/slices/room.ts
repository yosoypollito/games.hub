import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/redux/store";

import type { Room, InitialState } from "@/types";

import gamesDict from "@/app/games/games.dict";
import { updateDoc, doc, type UpdateData } from "firebase/firestore";
import { db } from "@/app/firebase/client";

export const fetchRoom = createAsyncThunk(
  "room/fetchRoom",
  async (id: string) => {
    const data = await request<{
      room: Room.Item;
    }>({
      method: "GET",
      url: `${process.env.NEXT_PUBLIC_API_URL}/api/room/${id}`,
    });

    if (!data?.room) {
      throw new Error("Cannot get room information");
    }

    return data.room;
  }
);

export const initGame = createAsyncThunk<
  Room.Item,
  { game: string; force?: boolean },
  { state: RootState }
>(
  "room/initGame",
  async ({ game, force }: { game: string; force?: boolean }, { getState }) => {
    const { initState } = gamesDict[game];

    const state = getState();
    const room = state.room.data;

    const roomRef = doc(db, "rooms", room.id);

    if (room.gameData == undefined || force) {
      await updateDoc(roomRef, {
        gameData: initState,
      });
    }

    return room;
  }
);

export const updateGame = createAsyncThunk<
  Room.Item,
  UpdateData<any>,
  { state: RootState }
>("room/updateGame", async (gameData, { getState }) => {
  const state = getState();
  const room = state.room.data;

  const roomRef = doc(db, "rooms", room.id);

  await updateDoc(roomRef, {
    ...gameData,
  });

  return room;
});

const initialState: InitialState<
  Room.Item,
  "loading.game" | "game.loaded" | "game.load.failed"
> = {
  data: {
    id: "",
    game: "",
    leader: "",
    players: {},
  },
  status: "idle",
  error: null,
};

export const roomSlice = createSlice({
  name: "room",
  initialState,
  reducers: {
    updateRoom(state, action: PayloadAction<{ [field: string]: any }>) {
      state.data = {
        ...state.data,
        ...action.payload,
      };
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchRoom.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        fetchRoom.fulfilled,
        (state, action: PayloadAction<Room.Item>) => {
          state.status = "succeeded";
          state.data = action.payload;
        }
      )
      .addCase(fetchRoom.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || null;
      });

    builder
      .addCase(initGame.pending, (state) => {
        state.status = "loading.game";
      })
      .addCase(initGame.fulfilled, (state) => {
        state.status = "game.loaded";
      })
      .addCase(initGame.rejected, (state) => {
        state.status = "game.load.failed";
      });
  },
});

export const { updateRoom } = roomSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectRoom = (state: RootState) => state.room.data;
export const selectGameData = (state: RootState) => state.room.data.gameData;

export default roomSlice.reducer;

import request from "@/api";
