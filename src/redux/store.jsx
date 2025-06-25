import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// function getDefaultMiddleware<S = any, O extends Partial<GetDefaultMiddlewareOptions> = {
//     thunk: true;
//     immutableCheck: true;
//     serializableCheck: true;
//     actionCreatorCheck: true;
// }
