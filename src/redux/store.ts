import { configureStore } from "@reduxjs/toolkit";
import roomReducer from "@/redux/slices/room";
import userReducer from "@/redux/slices/user";

const store = configureStore({
  reducer: {
    room: roomReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
