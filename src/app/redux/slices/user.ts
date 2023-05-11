import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/redux/store";

import type { User, InitialState } from "@/types";

import { Auth } from "@/firebase/client";

import { updateProfile } from "firebase/auth";

const { onAuthChange, anonSignIn } = Auth();

export const fetchUser = createAsyncThunk("user/fetchUser", async () => {
  const user = await onAuthChange();

  if (user) {
    const userData = {
      displayName: user.displayName,
      uid: user.uid,
    };
    return userData;
  }

  return null;
});

export const createAccount = createAsyncThunk(
  "user/createAccount",
  async () => {
    try {
      await anonSignIn();

      return "Account created";
    } catch (e) {
      console.log("Error during account creation");
    }
  }
);

export const updateUser = createAsyncThunk(
  "user/updateUser",
  async (newUserData: any) => {
    const user = await onAuthChange();

    if (!user) {
      throw new Error("No user authorization");
    }

    await updateProfile(user, {
      ...newUserData,
    });

    return "Updated Profile";
  }
);

const initialState: InitialState<User.Item | null> = {
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
  },
});

export const {} = userSlice.actions;

export const selectUser = (state: RootState) => state.user.data;

export default userSlice.reducer;
