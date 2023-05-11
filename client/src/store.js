import { configureStore } from "@reduxjs/toolkit"
import authSlice from "./features/auth/userAuthSlice"

const store = configureStore({
  reducer: {
    auth: authSlice,
  },
})

export default store
