import { configureStore } from "@reduxjs/toolkit"
import userSlice from "./features/user/userSlice"
import authSlice from "./features/auth/authSlice"

const store = configureStore({
  reducer: {
    user: userSlice,
    auth: authSlice,
  },
})

export default store
