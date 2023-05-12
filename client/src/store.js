import { configureStore } from "@reduxjs/toolkit"
import userAuthSlice from "./features/auth/userAuthSlice"
import adminAuthSlice from "./features/auth/adminAuthSlice"

const store = configureStore({
  reducer: {
    userAuth: userAuthSlice,
    adminAuth: adminAuthSlice,
  },
})

export default store
